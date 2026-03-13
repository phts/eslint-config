'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{ts,tsx,mts}',
      extends: require.resolve('../../rules/typescript'),
    },
    {
      files: '*.d.ts',
      extends: require.resolve('../../rules/typescript/definitions'),
    },
  ],
}
