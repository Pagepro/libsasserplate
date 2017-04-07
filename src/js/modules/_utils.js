const scssVariables = {
  inner: 1240,
  gutter: 20
}
const breakpoints = {
  desktopSmall: scssVariables.inner + scssVariables.gutter * 4,
  tablet: 1024,
  phone: 767
}

module.exports = {
  breakpoints,
  scssVariables
}
