'use strict'

const reactConfig = require('../react')

module.exports = {
  overrides: [
    Object.assign({}, reactConfig.overrides[0], {
      files: 'src/**/*.{ts,tsx}',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        useJSXTextNode: true,
      },
    }),
  ],
}
