import { Command } from "@oclif/core";
import {
  Spinner,
  downloadNode,
} from "@astar-network/swanky-core";
import path = require("node:path");

export class Node extends Command {
  async run(): Promise<void> {
    const spinner = new Spinner(true);
    // const config = getSwankyConfig();
    const projectPath = path.resolve();
    const nodeInfo = {
      version: "0.10.0",
      polkadotPalletVersions: "polkadot-v0.9.32",
      supportedInk: "v3.4",
      downloadUrl: {
        darwin: // no mac support, binary is not executable even if downloaded
          "https://github.com/Phala-Network/phala-blockchain/archive/refs/tags/nightly-2022-11-25.tar.gz",
        linux:
          "https://github.com/Phala-Network/phala-blockchain/archive/refs/tags/nightly-2022-11-25.tar.gz",
      },
    };
    const taskResult = (await spinner.runCommand(
      () => downloadNode(projectPath, nodeInfo, spinner),
      "Downloading Phala node"
    )) as string;
    console.log(taskResult);
  }
}
