'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      extends: require.resolve('../rules/prettier'),
    },
  ],
}
