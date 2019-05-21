'use strict'

module.exports = {
  overrides: [
    {
      files: '*.js',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
      },
      env: {
        node: true,
      },
    },
  ],
}
