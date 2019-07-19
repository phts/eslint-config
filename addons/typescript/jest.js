'use strict'

const jestConfig = require('../jest')

module.exports = {
  overrides: [
    Object.assign({}, jestConfig.overrides[0], {
      files: [
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
        '**/__mocks__/**/*.ts?(x)',
      ],
    }),
  ],
}
