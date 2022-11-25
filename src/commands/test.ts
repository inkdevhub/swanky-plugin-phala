import {Command, Flags} from '@oclif/core'
import execa from "execa"
import path = require("node:path")

export default class Test extends Command {
  static description = 'Simple test'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const projectPath = path.resolve()
    const devphasePath = path.resolve(projectPath, "devphase")
    const {args, flags} = await this.parse(Test)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/hashwarlock/Projects/Phala/Workshop/Sub0/swanky-plugin-phala/src/commands/test.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    await execa.command(`yarn install`, { cwd: devphasePath })
    await execa.command(`yarn compile`, { cwd: devphasePath })
    this.log(`test works?`)
  }
}
