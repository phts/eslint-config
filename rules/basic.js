'use strict'

module.exports = {
  extends: ['eslint:recommended', 'plugin:eslint-comments/recommended'],

  plugins: ['import'],

  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': ['error', {allowWholeFile: true}],

    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': 'error',

    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    curly: 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    eqeqeq: 'error',
    'func-call-spacing': 'error',
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'keyword-spacing': 'error',
    'max-len': ['error', {code: 100}],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-console': ['error', {allow: ['info', 'warn', 'error']}],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'all', {ignoreJSX: 'all'}],
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'padded-blocks': ['error', 'never'],
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'rest-spread-spacing': 'error',
    semi: ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    strict: 'error',
    'template-curly-spacing': 'error',
    'wrap-iife': 'error',
    'yield-star-spacing': ['error', 'before'],
    yoda: 'error',
  },
}