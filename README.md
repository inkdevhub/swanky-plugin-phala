# **This repo is currently being maintained [here](https://github.com/Phala-Network/swanky-plugin-phala)**
# swanky-plugin-phala

This is an example plugin for swanky-cli, meant to demonstrate how to build one.
It adds `phala node download` commands to swanky-cli's `swanky` command.
When called, it downloads phala-node from https://github.com/Phala-Network/phala-blockchain/releases/download/poc2-3.0-alpha1/phala-node and puts it in `bin/` folder.

## How to use:

Install swanky-cli globally:

```
npm i -g @astar-network/swanky-cli
```

Clone this repo, run `yarn install` then run `yarn build`, and link it to swanky-cli:

```
swanky plugins:install [PATH_TO_REPO]
```

> **NOTE** This does not work currently. Use dev commands instead by executing `./bin/dev phala [command]` instead.
> 

Now you can run `swanky phala init`

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
* [swanky-plugin-phala](#swanky-plugin-phala)
* [Generated README:](#generated-readme)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @astar-network/swanky-plugin-phala
$ phala COMMAND
running command...
$ phala (--version)
@astar-network/swanky-plugin-phala/0.2.0 linux-x64 node-v18.12.1
$ phala --help [COMMAND]
USAGE
  $ phala COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`phala --help [COMMAND]`](#phala-help-command)
* [`phala phala compile [CONTRACTNAME]`](#phala-phala-compile-contractname)
* [`phala phala init [PROJECTNAME]`](#phala-phala-compile-projectname)
* [`phala phala stack`](#phala-phala-stack)
* [`phala phala stack-setup`](#phala-phala-stack-setup-file)
* [`phala phala test [FILE]`](#phala-phala-test-file)
* [`phala phala typings [CONTRACTNAME]`](#phala-phala-typings-file)

## `phala help [COMMAND]`

Display help for phala.

```
USAGE
  $ phala --help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for phala.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `phala phala compile [CONTRACTNAME]`

Compile Phala Phat Contract

```
USAGE
  $ phala phala compile [CONTRACTNAME] [-w <value>] [-r]

FLAGS
  -r, --force         compile in release mode
  -w, --name=<value>  watch for changes

DESCRIPTION
  Compile Contract

EXAMPLES
  $ phala phala compile
```
## `phala phala init [PROJECTDIR]`

Generate a new Phat Contract environment and download local testnet binares.

```
USAGE
  $ phala phala init [PROJECTDIR]

FLAGS
  -v, --verbose

DESCRIPTION
  Generate a new Phat Contract environment

EXAMPLES
  $ phala phala init my_new_project
```

## `phala phala stack`

Starting local stack (node + pruntime + pherry)

```
USAGE
  $ phala phala stack

DESCRIPTION
  Starting local stack (node + pruntime + pherry)

EXAMPLES
  $ phala phala stack
```

## `phala phala stack-setup`

Configuring the local testnet

```
USAGE
  $ phala phala stack-setup

DESCRIPTION
  Configuring the local testnet

EXAMPLES
  $ phala phala stack-setup
```

## `phala phala test [FILE]`

TODO

```
USAGE
  $ phala phala test [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  TODO

EXAMPLES
  $ phala phala test
```
USAGE
  $ phala phala init [PROJECTNAME]

FLAGS
  -v, --verbose

DESCRIPTION
  describe the command here

EXAMPLES
  $ phala phala init my_new_project
```

## `phala phala stack`

Starting local stack (node + pruntime + pherry)

```
USAGE
  $ phala phala stack

DESCRIPTION
  Starting local stack (node + pruntime + pherry)

EXAMPLES
  $ phala phala stack
```

## `phala phala stack-setup [FILE]`

TODO

## `phala phala typings [CONTRACTNAME]`

Typings for the Phat Contract

```
USAGE
  $ phala phala typings [CONTRACTNAME] -w

FLAGS
  -w, --watch

DESCRIPTION
  Typings

EXAMPLES
  $ phala phala typings
```
<!-- commandsstop -->
