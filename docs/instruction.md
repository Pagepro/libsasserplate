# Usage
There are a few custom features that can be confusing. Most of the choices are explained here.

## Media queries
Media queries are handled with [include-media](https://github.com/eduardoboucas/include-media) library. The library makes the rules more readable and DRY. 
Media query can be defined by either pixel values or pre-defined breakpoint and/or media rule. The queries and rules are defined within `src\scss\base\_media-config.scss`(with corresponding pixel values of the breakpoints defined in `src\scss\base\_variables.scss`).

The breakpoints can be customized. 
### Example: 
```css
body { 
    @include media('>desktop') {
        background: pink;
    }
    @include media('<=tablet') {
        background: red;
    }
    @include media('<=mobile') {
        background: yellow;
    }
    @include media('>mobile', '<=desktop') {
        border: 5px solid grey;
    }
    @include media('>tablet', '<=1100px') {
        color: red;
    }
    @include media('<=mobile', 'landscape') {
        background: orange;
    }
}
```

## Variable maps
### Basic usage
Some of the variables are encapsulated within SCSS maps(see: `src\scss\base\_variables.scss`). This helps to orgnize the code within given namespace. 
For example, instead of naming each color variable as `$color-main`, `$color-blue`, we can create a single map variable `$colors` which will contain both `main` and `blue` color. For example: 
```css
$color-main: #000;
$color-blue: #216fd4;
```
becomes: 
```css
$colors: (
    main: #000,
    blue: #216fd4
);
```
The colors can be then extracted from the map using SCSS's built-in function [map-get()](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method). For example: 
```css
.c-hero {
    background-color: map-get($colors, blue);
}
```
To avoid using this native function everywhere in the project and have a value check, custom functions have been created in `src\scss\base\_functions.scss`. They require only one parameter hence you don't need to remember the maps' names. 
By default, the function's name is singular form of the object's name to prevent confusion. 

To use such map/variable, you'll proxy it by using the declared function. For example: 
```css
.c-hero {
    background-color: color(blue);
}
```

Each of the maps has a function added to it. This creates some boilerplate, but trying to come up with iterative solution would cause the maps to grow in size(eg. having to contain function's name as a key:value pair) as SCSS functions have limited functionality.

### Nested maps
By default the functions don't support nested maps. Only one function-map has been created that does this(of course you can duplicate it to your liking). 

Sizes function can reach 2 levels deep, meaning you can either specify a value as a number `(eg. foo: 200px)` or a map `(eg. foo: ( bar: 100px ))`. The function accepts two parameters for each corresponding nesting depth - `sizes(first_key, second_key)`. 
For example: 

```css
$sizes: (
    foo: 100px,
    bar: (
        foo: 400px
    )
);
```
Calling `size(foo)` will return `100px`.
Calling `size(bar, foo)` will return `400px`.

## Auto-generated ui color classes
Often we need to quickly apply a specific color or a background. Helper ui classes have been created for that purpose. 
A function that maps `$colors` map to both `.ui-bg` and `.ui-color` modifiers have been created. This means it will map any color defined within the mentioned map to the ui class. For example: 
```css
$colors: (
    main: #000,
    blue: #216fd4
);
```
will create four following classes: 
```css
.ui-bg--main {
    background-color: #000;
}
.ui-bg--blue {
    background-color: #216fd4;
}
.ui-color--main {
    color: #000;
}
.ui-color--blue {
    color: #216fd4;
}
```
The function that does this magic has been defined in `src\scss\base\_mixins.scss`

## Mixins

Multiple mixins have been pre-defined to improve development processes. Thanks to them you don't have to repeat redundant code and cam simply include it where it is needed.
Below is a basic list of the mixins: 
- `font-smoothing` - enables or disabled font smoothing. Accepts one parameter(on)
- `clearfix` - creates a pseud-element `::after` that applies a clearfix after floated elements
- `color-modifiers` - when used within a class, will iterte over `$colors` map and append a modifier function with the color's name(the key within the map). Such function will change element's content color(to the corresponding value within the map).
- `background-modifiers` - when used within a class, will iterte over `$colors` map and append a modifier function with the color's name(the key within the map). Such function will change element's background color(to the corresponding  value within the map).
- `transition` - it can be tedious to remember then look up a default transition used within a project. This mixins can accept two optional parameters - `$duration` and a `$timing` function. 
- `ellipsis` - creates ellipsis for an overflowing text
- `animate-link` - appends a pseudo element that combined with `animate-link-reverse` mixin creates a smooth underd hover effect.
- `animate-link-reverse` - allows to display a hidden underline created by `animate-link`. It is meant to be combined together: `.foo { @include animate-link; }`, `.foo:hover { @include animate-link-reverse; }`.
