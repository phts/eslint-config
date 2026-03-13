'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{ts,mts}',
      extends: require.resolve('../../rules/typescript/node'),
    },
  ],
}
