# LibSasserPlate

**LibSass** (http://libsass.org) starter for projects by Pagepro.

## Requirements
1. node & npm
2. sass
3. **grunt-cli** node package installed globally:
`npm install -g grunt-cli`

## Installation

```shell
cd package_directory
npm install
```

## Grunt Tasks

### Default Task

This task is used for development.

What it does?

1. Compiles SASS (src/sass) files into CSS (static/css).
2. Copies src/js files into JS (static/js).
3. Running LiveReload that allows refreshing CSS files without browser refresh [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload).
4. Running local sever of static files [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect).

```shell
grunt
```

#### Options

##### Port

Type: `Integer`
Default: `8080`

The port on which the webserver will respond. The task will fail if the specified port is already in use. You can use the special values `0` or `'?'` to use a system-assigned port.

```shell
grunt --port 8011
```

### Compile Task

This task is used only for SCSS -> CSS compilation.

What it does?

1. Compiles SASS (src/sass) files into CSS (static/css).

```shell
grunt compile
```

### Sprite Task

This task is used for Sprites generation using **grunt-spritesmith** (https://github.com/Ensighten/grunt-spritesmith).

What it does?

1. Gets images (src/img/sprite/*.png) and generates sprite (static/img/sprite.png).
2. Creates Sprites SCSS file (src/sass/sprites.scss).

```shell
grunt sprites
```

### Publish Task

This task is used runing just before publishing project to Q&A or client.

What it does?

1. Adds random parameters at CSS&JS declarations to reset clients browser cache using **grunt-cache-breaker** (https://github.com/shakyshane/grunt-cache-breaker).
2. Optimizes images (static/img/) using **Kraken.io** (http://kraken.io).
3. Adds browser specific prefixes using **autoprefixer** (https://github.com/postcss/autoprefixer)

```shell
grunt publish
```
