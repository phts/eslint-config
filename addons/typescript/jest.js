'use strict'

module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.{ts,tsx,mts}', '**/?(*.)+(spec|test).{ts,tsx,mts}', '**/__mocks__/**/*.{ts,tsx,mts}'],
      extends: require.resolve('../../rules/typescript/jest'),
    },
  ],
}
