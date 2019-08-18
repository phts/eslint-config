'use strict'

module.exports = {
  overrides: [
    {
      files: 'src/**/*.{js,jsx}',
      extends: require.resolve('../rules/react'),
    },
  ],
}
