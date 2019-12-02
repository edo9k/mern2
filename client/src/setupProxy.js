/** @format */

const proxy = require('http-proxy-middleware')

// prettier-ignore
module.exports = function(app) {
  app.use(
    proxy(
      '/api', { 
        target: 'http://localhost:5000',
        secure: false
      }
    )
  )
}
