import path = require("node:path");
import { Command, Flags } from "@oclif/core";
import execa from "execa";
import { ensureSwankyProject, getSwankyConfig } from "@astar-network/swanky-core";

export class StartNode extends Command {
  static description = "Start a local node";

  static flags = {
    tmp: Flags.boolean({
      char: "t",
      description: "Run node with non-persistent mode"
    }),
  };

  static args = [];

  async run(): Promise<void> {
    ensureSwankyProject();

    const { flags } = await this.parse(StartNode);

    const config = await getSwankyConfig();
    // run persistent mode by default. non-persistent mode in case flag is provided.
    await execa.command(`${config.node.localPath} ${flags.tmp ? "--dev" : ""}`, {
      stdio: "inherit",
    });

    const binPath = path.dirname(config.node.localPath)
    await execa.command(`${path.resolve(binPath, "pruntime")} -c 0`)
    await execa.command(`${path.resolve(binPath, "pherry")} --dev --no-wait`)

    this.log("Node started");
  }
}
