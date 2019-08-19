'use strict'

module.exports = {
  extends: 'plugin:react/recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/display-name': 'off',
  },
}
