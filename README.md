# ![LibSasserPlate](docs/lib-sasserplate-intro.jpg)


> **LibSass** starter for front-end projects by Pagepro.

## Built with:

Features | Tools Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/) ([Libsass](http://libsass.org) via [node-sass](https://github.com/sass/node-sass)), [Autoprefixer](https://github.com/postcss/autoprefixer), [CSSNano](https://github.com/ben-eb/cssnano), Source Maps
**JavaScript** | [Babel](http://babeljs.io/), [Webpack](http://webpack.github.io/)
**HTML** | [Nunjucks](https://mozilla.github.io/nunjucks/), [gulp-data](https://github.com/colynb/gulp-data)
**Images** | Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin)
**Fonts** | Folder and `.sass` mixin for including WebFonts
**Live Updating** | [BrowserSync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
**Production Builds** | JS and CSS are [uglified](https://github.com/terinjokes/gulp-uglify) and [minified](http://cssnano.co/), [filename md5 hashing (reving)](https://github.com/sindresorhus/gulp-rev), [file size reporting](https://github.com/jaysalvat/gulp-sizereport), local production [Express](http://expressjs.com/) server for testing builds.
**JS Testing** | [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/), Example [Travis CI](https://travis-ci.org/) integration

## Requirements
1. [node](https://nodejs.org/en/) & [npm](https://docs.npmjs.com/cli/install).
2. SASS
3. **gulp-cli** node package installed globally:
`npm install -g gulp-cli`

## [Installation](docs/install.md)

```shell
cd package_directory
npm install
```

## Usage

### Run development tasks:

```shell
npm start
```

Aliases: `gulp`


### Build production files:

```shell
npm run production
```

Aliases: `gulp production`

Be sure to look over the [installation docs](docs/install.md) to verify your environment is prepared to run LibSasserPlate.
Once you have verified that your system can run LibSasserPlate, check out the [extra features](docs/extras.md) available.

## Directory structure explanation

* **/** - root directory with html files and configuration files (eslint, editorconfig)
* **src** - directory with source files
* **static** - directory compiled files, do not edit files in this directory because they will be overwritten
