'use strict'

module.exports = {
  extends: [
    './index',
    './addons/node',
    './addons/es6',
  ].map(require.resolve),
}
