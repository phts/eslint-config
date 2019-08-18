'use strict'

module.exports = {
  overrides: [
    {
      files: '*.ts',
      extends: require.resolve('../../rules/typescript/node'),
    },
  ],
}
