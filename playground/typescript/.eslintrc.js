'use strict'

module.exports = {
  extends: [
    '../../typescript',
  ].map(require.resolve),

  "parserOptions": {
    "ecmaVersion": 2018,
  },

  env: {
    node: true,
    es6: true,
  },
}
