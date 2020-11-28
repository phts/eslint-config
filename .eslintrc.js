'use strict'

module.exports = {
  extends: ['./index', './addons/jest', './addons/node'].map(require.resolve),

  overrides: [
    {
      files: 'tests/helpers.js',
      extends: ['./rules/jest'].map(require.resolve),
    },
    {
      files: '**/*.js',
      extends: ['./addons/prettier'].map(require.resolve),
    },
  ],
}
