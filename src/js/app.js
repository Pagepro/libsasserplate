import 'babel-polyfill'
import './modules/example'
import ClassExample from './modules/class-example'
import svg4everybody from 'svg4everybody'
import { getRandomNumber } from './utils'

svg4everybody()

/* ==========================================================================
 Exemplary class
========================================================================== */
const myClassExample = new ClassExample()
myClassExample.init()

console.log(getRandomNumber())
