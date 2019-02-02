'use strict'

const config = require('../../index')

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx}',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: '.',
      },
      env: {
        es6: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        indent: 'off',
        'no-extra-parens': 'off',
        'no-unused-vars': 'off',

        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type':  ['error', 'array-simple'],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/camelcase': config.rules.camelcase,
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/generic-type-naming': 'off',
        '@typescript-eslint/indent': config.rules.indent,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none',
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        }],
        '@typescript-eslint/member-naming': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/no-array-constructor': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-this-alias': ['error', {
          allowDestructuring: true,
        }],
        '@typescript-eslint/no-triple-slash-reference': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-interface': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    },
    {
      files: '*.d.ts',
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
