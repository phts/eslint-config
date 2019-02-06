'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx}',
      parserOptions: {
        ecmaVersion: 2018,
      },
      env: {
        es6: true,
      },
    },
  ],
}
