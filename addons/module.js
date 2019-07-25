'use strict'

module.exports = {
  overrides: [
    {
      files: 'src/**/*.js',
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        es6: true,
      },
    },
  ],
}
