// import $ from 'jquery'
// import { scssVariables, breakpoints } from './_utils'

class ClassExample {
  constructor (userConfig) {
    const defaultConfig = {
      exemplaryCssSelector: '.js-exemplary-selector',
      activeClass: 'is-active'
    }
    this.config = Object.assign(defaultConfig, userConfig)
  }

  init () {
    // console.log(scssVariables.inner)
    // console.log(breakpoints.phone)
  }
}

export default ClassExample
