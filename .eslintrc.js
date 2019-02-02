'use strict'

module.exports = {
  extends: [
    './index',
    './addons/es6',
  ].map(require.resolve),

  env: {
    node: true,
  },
}
