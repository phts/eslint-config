'use strict'

module.exports = {
  extends: ['./index', './addons/jest', './addons/node', './addons/prettier'].map(require.resolve),

  overrides: [
    {
      files: 'tests/helpers.js',
      extends: ['./rules/jest', './addons/prettier'].map(require.resolve),
    },
  ],
}
