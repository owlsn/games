const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:8080',
      pathRewrite: function(path, req) {
        return path.replace('/api', '')
      },
      changeOrigin: true,
      logLevel: 'debug'
    })
  )
}
