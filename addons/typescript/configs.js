'use strict'

module.exports = {
  overrides: [
    {
      files: ['config/**/*.{ts,mts}', '.*.{ts,mts}', 'webpack.*.{ts,mts}', '*.config.{ts,mts}'],
      extends: require.resolve('../../rules/typescript/node'),
    },
  ],
}
