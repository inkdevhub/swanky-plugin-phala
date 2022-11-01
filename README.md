oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g swanky-plugin-phala
$ swanky-plugin-phala COMMAND
running command...
$ swanky-plugin-phala (--version)
swanky-plugin-phala/0.0.0 darwin-arm64 node-v18.10.0
$ swanky-plugin-phala --help [COMMAND]
USAGE
  $ swanky-plugin-phala COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`swanky-plugin-phala hello PERSON`](#swanky-plugin-phala-hello-person)
* [`swanky-plugin-phala hello world`](#swanky-plugin-phala-hello-world)
* [`swanky-plugin-phala help [COMMAND]`](#swanky-plugin-phala-help-command)
* [`swanky-plugin-phala plugins`](#swanky-plugin-phala-plugins)
* [`swanky-plugin-phala plugins:install PLUGIN...`](#swanky-plugin-phala-pluginsinstall-plugin)
* [`swanky-plugin-phala plugins:inspect PLUGIN...`](#swanky-plugin-phala-pluginsinspect-plugin)
* [`swanky-plugin-phala plugins:install PLUGIN...`](#swanky-plugin-phala-pluginsinstall-plugin-1)
* [`swanky-plugin-phala plugins:link PLUGIN`](#swanky-plugin-phala-pluginslink-plugin)
* [`swanky-plugin-phala plugins:uninstall PLUGIN...`](#swanky-plugin-phala-pluginsuninstall-plugin)
* [`swanky-plugin-phala plugins:uninstall PLUGIN...`](#swanky-plugin-phala-pluginsuninstall-plugin-1)
* [`swanky-plugin-phala plugins:uninstall PLUGIN...`](#swanky-plugin-phala-pluginsuninstall-plugin-2)
* [`swanky-plugin-phala plugins update`](#swanky-plugin-phala-plugins-update)

## `swanky-plugin-phala hello PERSON`

Say hello

```
USAGE
  $ swanky-plugin-phala hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/AstarNetwork/swanky-plugin-phala/blob/v0.0.0/dist/commands/hello/index.ts)_

## `swanky-plugin-phala hello world`

Say hello world

```
USAGE
  $ swanky-plugin-phala hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ swanky-plugin-phala hello world
  hello world! (./src/commands/hello/world.ts)
```

## `swanky-plugin-phala help [COMMAND]`

Display help for swanky-plugin-phala.

```
USAGE
  $ swanky-plugin-phala help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swanky-plugin-phala.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_

## `swanky-plugin-phala plugins`

List installed plugins.

```
USAGE
  $ swanky-plugin-phala plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ swanky-plugin-phala plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.5/src/commands/plugins/index.ts)_

## `swanky-plugin-phala plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ swanky-plugin-phala plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ swanky-plugin-phala plugins add

EXAMPLES
  $ swanky-plugin-phala plugins:install myplugin 

  $ swanky-plugin-phala plugins:install https://github.com/someuser/someplugin

  $ swanky-plugin-phala plugins:install someuser/someplugin
```

## `swanky-plugin-phala plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ swanky-plugin-phala plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ swanky-plugin-phala plugins:inspect myplugin
```

## `swanky-plugin-phala plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ swanky-plugin-phala plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ swanky-plugin-phala plugins add

EXAMPLES
  $ swanky-plugin-phala plugins:install myplugin 

  $ swanky-plugin-phala plugins:install https://github.com/someuser/someplugin

  $ swanky-plugin-phala plugins:install someuser/someplugin
```

## `swanky-plugin-phala plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ swanky-plugin-phala plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ swanky-plugin-phala plugins:link myplugin
```

## `swanky-plugin-phala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-plugin-phala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-plugin-phala plugins unlink
  $ swanky-plugin-phala plugins remove
```

## `swanky-plugin-phala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-plugin-phala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-plugin-phala plugins unlink
  $ swanky-plugin-phala plugins remove
```

## `swanky-plugin-phala plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-plugin-phala plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-plugin-phala plugins unlink
  $ swanky-plugin-phala plugins remove
```

## `swanky-plugin-phala plugins update`

Update installed plugins.

```
USAGE
  $ swanky-plugin-phala plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
