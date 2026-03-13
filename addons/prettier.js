'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx,mts}',
      extends: require.resolve('../rules/prettier'),
    },
  ],
}
