// import $ from 'jquery'
// import { SCSS_VARIABLES, BREAKPOINTS } from './../utils'

export default class ClassExample {
  constructor (userConfig) {
    const defaultConfig = {
      exemplaryCssSelector: '.js-exemplary-selector',
      activeClass: 'is-active'
    }
    this.config = Object.assign(defaultConfig, userConfig)
  }

  init () {
    // console.log(SCSS_VARIABLES.inner)
    // console.log(BREAKPOINTS.phone)
  }
}
