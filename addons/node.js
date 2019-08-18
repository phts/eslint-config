'use strict'

module.exports = {
  overrides: [
    {
      files: '*.js',
      extends: require.resolve('../rules/node'),
    },
  ],
}
