import 'babel-polyfill'
import './modules/example'
import ClassExample from './modules/class-example'
import svg4everybody from 'svg4everybody'

/* ==========================================================================
   Exemplary class
   ========================================================================== */
const myClassExample = new ClassExample()
myClassExample.init()
svg4everybody()
