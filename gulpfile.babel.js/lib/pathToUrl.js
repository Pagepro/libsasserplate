import path from 'path'

function pathToUrl () {
  // Normalizes Windows file paths to valid url paths
  return path.join.apply(this, arguments).replace(/\\/g, '/')
}
export default pathToUrl
