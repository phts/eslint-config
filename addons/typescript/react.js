'use strict'

module.exports = {
  overrides: [
    {
      files: 'src/**/*.{ts,tsx}',
      extends: require.resolve('../../rules/typescript/react'),
    },
  ],
}
