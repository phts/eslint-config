'use strict'

module.exports = {
  extends: [
    './index',
  ].map(require.resolve),

  "parserOptions": {
    "ecmaVersion": 2018,
  },

  env: {
    node: true,
    es6: true,
  },
}
