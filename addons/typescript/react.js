'use strict'

const reactConfig = require('../react')

module.exports = {
  overrides: [
    Object.assign({}, reactConfig.overrides[0], {
      files: '*.{ts,tsx}',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        useJSXTextNode: true,
      },
    }),
  ],
}
