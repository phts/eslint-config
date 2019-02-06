'use strict'

module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      rules: {
        'jest/consistent-test-it': ['error', {fn: 'it'}],
        'jest/expect-expect': 'off',
        'jest/lowercase-name': 'off',
        'jest/no-alias-methods': 'off',
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': 'off',
        'jest/no-test-callback': 'off',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'off',
        'jest/no-truthy-falsy': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-spy-on': 'off',
        'jest/prefer-strict-equal': 'off',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-inline-snapshots': 'off',
        'jest/require-tothrow-message': 'off',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
        'jest/prefer-todo': 'off',
      },
    },
  ],
}
