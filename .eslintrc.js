'use strict'

module.exports = {
  extends: [
    './index',
    './addons/node',
  ].map(require.resolve),
}
