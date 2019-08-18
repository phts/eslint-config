'use strict'

module.exports = {
  overrides: [
    {
      files: 'src/**/*.js',
      extends: require.resolve('../rules/module'),
    },
  ],
}
