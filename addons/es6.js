'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx}',
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2018,
      },
      env: {
        es6: true,
      },
    },
  ],
}
