'use strict'

module.exports = {
  overrides: [
    {
      files: ['config/**/*.js', '.*.js', 'webpack.*.js', '*.config.js', '*.conf.js'],
      extends: require.resolve('../rules/node'),
    },
    {
      files: 'config/**/jest.js',
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
}
