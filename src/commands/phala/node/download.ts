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
      polkadotPalletVersions: "polkadot-v0.9.27",
      supportedInk: "v3.3.1",
      downloadUrl: {
        darwin: // no mac support, binary is not executable even if downloaded
          "https://github.com/Phala-Network/phala-blockchain/releases/download/nightly-2022-11-24/phala-node",
        linux:
          "https://github.com/Phala-Network/phala-blockchain/releases/download/nightly-2022-11-24/phala-node",
      },
    };
    const taskResult = (await spinner.runCommand(
      () => downloadNode(projectPath, nodeInfo, spinner),
      "Downloading Phala node"
    )) as string;
    console.log(taskResult);
  }
}
