'use strict'

const basic = require('../basic')

module.exports = {
  extends: 'plugin:@typescript-eslint/recommended',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  env: {
    es6: true,
  },
  rules: {
    indent: 'off',
    'no-extra-parens': 'off',
    'import/named': 'off',

    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': basic.rules.camelcase,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter'},
    ],
    '@typescript-eslint/indent': basic.rules.indent,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
      },
    ],
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
  },
}
