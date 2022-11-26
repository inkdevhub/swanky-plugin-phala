import {Command} from '@oclif/core'
import execa from 'execa'
import path = require("node:path")

export default class PhalaInit extends Command {
  static description = 'Init project (creates required files and directories)'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.log(`Initializing`)

    const projectPath = path.resolve()
    const devphasePath = path.resolve(projectPath, "devphase")

    await execa.command(`yarn install`, { cwd: devphasePath })
    await execa.command(`yarn compile`, { cwd: devphasePath })

    await execa.command(`yarn devphase init`, { cwd: projectPath })
  }
}
