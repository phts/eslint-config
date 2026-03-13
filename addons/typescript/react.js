'use strict'

module.exports = {
  overrides: [
    {
      files: 'src/**/*.{ts,tsx,mts}',
      extends: require.resolve('../../rules/typescript/react'),
    },
  ],
}
