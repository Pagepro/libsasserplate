// body {
//     @include media('<=desktop') {
//         background: pink;
//     }
//     @include media('<=tablet') {
//         background: red;
//     }
//     @include media('<=phone') {
//         background: yellow;
//     }
//     @include media('>phone', '<=desktop') {
//         border: 5px solid grey;
//     }
//     @include media('>tablet', '<=1100px') {
//         color: red;
//     }
//     @include media('<=phone', 'landscape') {
//         background: orange;
//     }
// }

Define grouped variables in maps, use via a proxy function, eg. 
Define a map: 
$colors: (
  main: #000,
  accent: #d4213d,
  blue: #09A6E4
);
Define a function: 
@function color($key) {
  @if map-has-key($colors, $key) {
    @return map-get($colors, $key);
  }

  @warn "Unknown `#{$key}` in $colors.";
  @return null;
}
Get a desired value: 
color: color(main);


___
Auto-generate ui-bg-- and ui-color-- classes that set background and color values that are defined within colors map.

___

Sizes function can reach 2 levels deep, meaning you can either specify a value as a number(eg. foo: 200px) or a map(eg. foo: ( bar: 100px )). In case of the first option, to access it, you simply pass a key as a parameter to the size function - size(foo) (returns 200px). In case of the second, you need to pass two parameters - size(foo, bar) (returns 100px).
