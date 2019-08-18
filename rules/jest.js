'use strict'

module.exports = {
  extends: 'plugin:jest/recommended',
  env: {
    jest: true,
  },
  rules: {
    'jest/consistent-test-it': ['error', {fn: 'it'}],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-empty-title': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-mocks-import': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
  },
}
