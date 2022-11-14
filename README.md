# swanky-plugin-phala

This is an example plugin for swanky-cli, meant to demonstrate how to build one.
It adds `phala node download` commands to swanky-cli's `swanky` command.
When called, it downloads phala-node from https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node and puts it in `bin/` folder.

## How to use:

Install swanky-cli globally:

```
npm i -g @astar-network/swanky-cli@1.0.0-alpha.7
```

Clone this repo, run `yarn build`, and link it to swanky-cli:

```
swanky plugins:install [PATH_TO_REPO]
```

Now you can run `swanky phala node download`

## swanky-core

Most of the core functionality has been extracted to swanky-core package so it can be reused:

[source](https://github.com/AstarNetwork/swanky-cli/tree/feature/convert-to-monorepo/packages/core)

[package](https://www.npmjs.com/package/@astar-network/swanky-core/v/1.0.0-alpha.7)

## oclif docs:

https://oclif.io/docs/introduction
https://oclif.io/docs/plugins
https://github.com/oclif/plugin-plugins

# Generated README:

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @astar-network/swanky-plugin-phala
$ phala COMMAND
running command...
$ phala (--version)
@astar-network/swanky-plugin-phala/0.2.0 darwin-x64 node-v18.2.0
$ phala --help [COMMAND]
USAGE
  $ phala COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`phala help [COMMAND]`](#phala-help-command)
- [`phala phala node download`](#phala-phala-node-download)

## `phala help [COMMAND]`

Display help for phala.

```
USAGE
  $ phala help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for phala.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `phala phala node download`

```
USAGE
  $ phala phala node download
```

<!-- commandsstop -->
