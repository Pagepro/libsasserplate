// import $ from 'jquery'
export default class ClassExample {
  constructor (userConfig) {
    const defaultConfig = {
      exemplaryCssSelector: '.js-exemplary-selector',
      activeClass: 'is-active'
    }
    this.config = Object.assign(defaultConfig, userConfig)
  }
}
