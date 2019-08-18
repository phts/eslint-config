'use strict'

module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
        '**/__mocks__/**/*.ts?(x)',
      ],
      extends: require.resolve('../../rules/typescript/jest'),
    },
  ],
}
