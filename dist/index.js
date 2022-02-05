
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./oxswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./oxswap-sdk.cjs.development.js')
}
