'use strict'

module.exports = {
  extends: [
    './index',
    './addons/node',
    './addons/prettier',
  ].map(require.resolve),
}
