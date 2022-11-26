import {Command} from '@oclif/core'
import execa from 'execa'
import path = require("node:path")

export default class PhalaStack extends Command {
  static description = 'Starting local stack (node + pruntime + pherry)'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log(`Starting Stack`)

    const projectPath = path.resolve()

    await execa.command(`yarn devphase stack`, { cwd: projectPath })

  }
}
