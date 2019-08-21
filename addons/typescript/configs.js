'use strict'

module.exports = {
  overrides: [
    {
      files: ['config/**/*.ts', '.*.ts', 'webpack.*.ts', '*.config.ts'],
      extends: require.resolve('../../rules/typescript/node'),
    },
  ],
}
