const SCSS_VARIABLES = {
  inner: 1240,
  gutter: 20
}
const BREAKPOINTS = {
  desktopSmall: SCSS_VARIABLES.inner + SCSS_VARIABLES.gutter * 4,
  tablet: 1024,
  phone: 767
}

module.exports = {
  BREAKPOINTS,
  SCSS_VARIABLES
}
