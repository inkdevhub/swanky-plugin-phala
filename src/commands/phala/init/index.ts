import { Command, Flags } from "@oclif/core";
import path = require("node:path");
import { writeJSON } from "fs-extra";
import {
  checkCliDependencies,
  copyTemplateFiles,
  downloadNode,
  installDeps,
  processTemplates,
} from "../../../lib/tasks";
import execa = require("execa");
import { paramCase, pascalCase, snakeCase } from "change-case";
import inquirer = require("inquirer");
import { choice, email, name, pickTemplate } from "../../../lib/prompts";
import { Spinner } from "../../../lib/spinner";
import { ChainAccount } from "../../../lib/account";
import { SwankyConfig } from "../../../lib/config";
import {
  DEFAULT_LOCAL_NETWORK_URL,
} from "../../../lib/network";
import { getTemplates } from "../../../lib/template";
import { NodeInfo } from "../../../lib/nodeInfo";

export const phalaNode: NodeInfo = {
  name: "phala-node",
  version: "3.0.0",
  polkadotPalletVersions: "polkadot-v0.9.30",
  supportedInk: "v3.3.1",
  downloadUrl: {
    linux:
      "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
    darwin:
      "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
  },
}

export const phalaComponents = {
  pRuntime: {
    downloadUrl: {
      linux: ""
    }
  },
  pherry: {
    downloadUrl: {
      linux: ""
    }
  }
}

export class Init extends Command {
  static description = "Generate a new phat contract environment";

  static flags = {
    "phala-node": Flags.boolean(),
    template: Flags.string({
      options: getTemplates(path.resolve(__dirname, "../../..", "templates"), "pink").contractTemplatesList.map((template) => template.value),
    }),
    verbose: Flags.boolean({ char: "v" }),
  };

  static args = [
    {
      name: "projectName",
      required: true,
      description: "directory name of new project",
    },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Init);

    const projectPath = path.resolve(args.projectName);
    const templates = getTemplates(path.resolve(__dirname, "../../..", "templates"), "pink");

    const questions = [
      pickTemplate(templates.contractTemplatesList),
      name("contract", (ans) => ans.contractTemplate, "What should we name your contract?"),
      name(
        "author",
        () => execa.commandSync("git config --get user.name").stdout,
        "What is your name?"
      ),
      email(),
    ];

    if (!flags["phala-node"]) {
      questions.push(choice("usePhalaNode", "Do you want to download Phala node?"));
    }

    const answers = await inquirer.prompt(questions);

    const spinner = new Spinner(flags.verbose);

    await spinner.runCommand(() => checkCliDependencies(spinner), "Checking dependencies");

    await spinner.runCommand(
      () =>
        copyTemplateFiles(
          templates.templatesPath,
          path.resolve(templates.contractTemplatesPath, answers.contractTemplate),
          answers.contractName,
          projectPath
        ),
      "Copying template files"
    );

    await spinner.runCommand(
      () =>
        processTemplates(projectPath, {
          project_name: paramCase(args.projectName),
          author_name: answers.authorName,
          author_email: answers.email,
          swanky_version: this.config.pjson.version,
          contract_name_snake: snakeCase(answers.contractName),
          contract_name_pascal: pascalCase(answers.contractName),
        }),
      "Processing templates"
    );

    await spinner.runCommand(
      () => execa.command("git init", { cwd: projectPath }),
      "Initializing git"
    );

    let nodePath = "";
    if (flags["phala-node"] || answers.usePhalaNode) {
      const taskResult = (await spinner.runCommand(
        () => downloadNode(projectPath, phalaNode, spinner),
        "Downloading Phala node"
      )) as string;
      nodePath = taskResult;
    }

    console.log(projectPath)
    await spinner.runCommand(() => installDeps(projectPath), "Installing dependencies");

    const config: SwankyConfig = {
      node: {
        localPath: nodePath,
        polkadotPalletVersions: phalaNode.polkadotPalletVersions,
        supportedInk: phalaNode.supportedInk,
      },
      accounts: [
        {
          alias: "alice",
          mnemonic: "//Alice",
          isDev: true,
          address: new ChainAccount("//Alice").pair.address,
        },
        {
          alias: "bob",
          mnemonic: "//Bob",
          isDev: true,
          address: new ChainAccount("//Bob").pair.address,
        },
      ],
      networks: {
        local: { url: DEFAULT_LOCAL_NETWORK_URL },
      },
      contracts: [],
    };
    await spinner.runCommand(
      () => writeJSON(path.resolve(projectPath, "swanky.config.json"), config, { spaces: 2 }),
      "Writing config"
    );

    this.log("🎉 😎 Swanky project successfully initialised! 😎 🎉");
  }
}
