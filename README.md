![LibSasserPlate](docs/lib-sasserplate-intro.png)

> **LibSass** starter for front-end projects by Pagepro.

# Requirements
1. [node v8.12.0 or later](https://nodejs.org/en/)
2. [yarn](https://yarnpkg.com/)
3. [EditorConfig](https://editorconfig.org/) for the code editor of your choice(optional).
4. [Standard](https://github.com/standard) plugin for the code editor of your choice(optional).

# Getting started
Three simple steps to start:

1. Install the required libraries.
2. Get a copy of LibSasserPlate.
3. Install the dependencies if you don't already have them.

## Installing the required libraries

### [Node.js](https://nodejs.org)
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

If you have node already installed on your OS, please make sure you have a supported version running. To check node's version, open a terminal and run:
```sh
node --version
```
Node should respond with a version at or above 8.12.0. If the command is not recognized or nothing happens, you might want to re-install node.

## Getting the starter
[Download LibSasserPlate](https://github.com/Pagepro/libsasserplate/releases/latest) and extract it to catalog you want to work.


## Local dependencies
Next, install the local development dependencies required by LibSasserPlate. To do that, simply run:

```sh
$ yarn install
```

That's it! You should now have everything needed to use the LibSasserPlate.

### Optional(but highly recommended)
Here at Pagepro, we always do our best to write our code high quality. Everyone makes a mistake from time to time, though. That's why we use libraries that help us avoid them as often as possible. Libsasserplate is configured to support both [EditorConfig](https://editorconfig.org/) and [Standard](https://github.com/standard). 
Thanks to EditorConfig, your files' settings will be consistent throught the project. 
Standard is a Javascript linter that keeps your code clean and forces good practices. 

Both of them require additional plugins for your IDE and cannot be installed by the starter. We cannot force you to use them, but we **highly** recommend you do.

# Usage

## Run development tasks:
To develop using LibSasserPlate, run: 
```shell
yarn start
```
This will start a local server and watch files for changes.  

## Build production files:

```shell
yarn run production
```

## Instructions
Some of the pre-defined functionality might seem intimidating at first. You can read on how to use it in the detailed [instruction manual](docs/instruction.md).

# Directory structure explanation

* **/** - root directory with html files and configuration files (eslint, editorconfig)
* **src** - directory with source files
* **static** - directory compiled files, do not edit files in this directory because they will be overwritten
