import {Command, Flags} from '@oclif/core'
import execa from 'execa'
import path = require("node:path")
import { Spinner } from "@astar-network/swanky-core";

export default class PhalaStackSetup extends Command {
  static description = 'Configuring the local testnet'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    verbose: Flags.boolean({ char: "v" }),
  };

  public async run(): Promise<void> {
    const {flags} = await this.parse(PhalaStackSetup)
    const spinner = new Spinner(flags.verbose);

    this.log(`Setting up Phala Stack`)

    const projectPath = path.resolve()
    await spinner.runCommand(
      () => execa.command(`yarn devphase stack:setup`, { cwd: projectPath }),
      "Configuring Phala local testnet..."
    )

    this.log("Phala local testnet configured successfully!");
  }
}
