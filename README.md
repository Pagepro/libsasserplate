# LibSasserPlate

> **LibSass** starter for front-end projects by Pagepro.

## Built with:

1. [LibSass](http://libsass.org)
2. [Gulp](http://gulpjs.com/)
3. [BrowserSync](http://www.browsersync.io/)
4. [Autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
5. [Plumber](https://github.com/floatdrop/gulp-plumber)
6. [normalize.css](https://necolas.github.io/normalize.css/)
7. [Breakpoint](http://breakpoint-sass.com/)

## Requirements
1. [node](https://nodejs.org/en/) & [npm](https://docs.npmjs.com/cli/install).
2. sass
3. **gulp-cli** node package installed globally:
`npm install -g gulp-cli`

## Installation

```shell
cd package_directory
npm install
bower install
```

## Directory explanation

* **/** - root directory with html files and configuration files (eslint, editorconfig)
* **src** - directory with source files
* **static** - directory compiled files, do not edit files in this directory because they will be overwritten

## Gulp Tasks

### Default Task

This task is used for development.

What it does?

1. Compiles SASS (src/sass) files into CSS (static/css).
2. Copies source files (js, images, fonts) to static catalog.
3. Running [BrowserSync](http://www.browsersync.io/) (file server, autorefresh, remote debugging).

```shell
gulp
```

### Compile Task

This task is used only for SCSS -> CSS compilation.

What it does?

1. Compiles SASS (src/sass) files into CSS (static/css).

```shell
gulp compile
```

### Publish Task

This task is used runing just before publishing project to Q&A or client.

What it does?

1. Adds random parameters at CSS&JS declarations to reset clients browser cache.
2. Adds browser specific prefixes using **autoprefixer** (https://github.com/postcss/autoprefixer)
3. Lints html.
4. Lints JS using [ESlint](https://github.com/adametry/gulp-eslint).

```shell
gulp publish
```
