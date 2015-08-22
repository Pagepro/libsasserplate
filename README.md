# LibSasserPlate

**LibSass** (http://libsass.org) starter for projects by Pagepro.

## Requirements
1. node & npm
2. sass
3. **gulp-cli** node package installed globally:
`npm install -g gulp-cli`

## Installation

```shell
cd package_directory
npm install
```

## Gulp Tasks

### Default Task

This task is used for development.

What it does?

1. Compiles SASS (src/sass) files into CSS (static/css).
2. Copies src/js files into JS (static/js).
3. Running BrowserSync file server that allows refreshing CSS files without browser refresh.

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
2. Optimizes images (static/img/) using **Kraken.io** (http://kraken.io).
3. Adds browser specific prefixes using **autoprefixer** (https://github.com/postcss/autoprefixer)

```shell
gulp publish
```
