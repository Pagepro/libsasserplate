import path from 'path'
import fs from 'fs'

function webpackManifest (publicPath, dest, filename) {
  filename = filename || 'rev-manifest.json'

  return function () {
    this.plugin('done', (stats) => {
      const JsonStats = stats.toJson()
      const chunks = JsonStats.assetsByChunkName
      const manifest = {}

      for (let key in chunks) {
        const originalFilename = `${key}.js`
        manifest[path.join(publicPath, originalFilename)] = path.join(publicPath, chunks[key])
      }

      fs.writeFileSync(
        path.join(process.cwd(), dest, filename),
        JSON.stringify(manifest)
      )
    })
  }
}

export default webpackManifest
