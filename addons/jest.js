'use strict'

module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/**/*.js?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '**/__mocks__/**/*.js?(x)',
      ],
      extends: require.resolve('../rules/jest'),
    },
  ],
}
