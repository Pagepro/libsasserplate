# Extras

[LibSasserPlate](https://github.com/Pagepro/libsasserplate/) can support additional features. Check how to activate them.

-

## [Flex helpers](https://github.com/Pagepro/flex-helpers)

1. Install flex-helpers from npm.

```sh
$ npm install --save-dev flex-helpers
```

2. Uncomment link to helpers in src/scss/main.scss

```css
// @import "node_modules/flex-helpers/flex-helpers";
```

## CSS Sprites

1. Make sure if [phantomjs](https://github.com/ariya/phantomjs) is installed:

```sh
$ phantomjs --version
```

2. If not install it globally:

```sh
$ npm install --global phantomjs
```

3. Install gulp.spritesmith

```sh
$ npm install --save-dev gulp.spritesmith
```

4. Install phantomjssmith

```sh
$ npm install --save-dev phantomjssmith
```

5. Uncomment link to sprites file in src/scss/main.scss

```css
// @import "sprites";
```

