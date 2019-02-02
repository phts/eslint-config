'use strict'

module.exports = {
  overrides: [
    {
      files: '*.js',
      parserOptions: {
        ecmaVersion: 2018,
      },
      env: {
        es6: true,
      },
    },
  ],
}
