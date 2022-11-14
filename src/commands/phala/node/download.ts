import { Command } from "@oclif/core";
import {
  Spinner,
  downloadNode,
  getSwankyConfig,
  SwankyConfig,
} from "@astar-network/swanky-core";
import path = require("node:path");

export class Init extends Command {
  async run(): Promise<void> {
    const spinner = new Spinner();
    // const config = getSwankyConfig();
    const projectPath = path.resolve();
    const nodeInfo = {
      version: "0.10.0",
      polkadotPalletVersions: "polkadot-v0.9.27",
      supportedInk: "v3.3.1",
      downloadUrl: {
        darwin:
          "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
        linux:
          "https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node",
      },
    };
    const taskResult = (await spinner.runCommand(
      () => downloadNode(projectPath, nodeInfo, spinner),
      "Downloading Phala node"
    )) as string;
    console.log(taskResult);
  }
}
