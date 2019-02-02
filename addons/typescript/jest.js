'use strict'

module.exports = {
  overrides: [
    {
      files: '*.test.{ts,tsx}',
      env: {
        jest: true,
      },
    },
  ],
}
