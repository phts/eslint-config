'use strict'

const helpers = require('../helpers')

describe('addons/jest', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/jest'],
    files: [
      '__tests__/target.js',
      '__tests__/target.jsx',
      '__tests__/dir/target.js',
      '__tests__/dir/target.jsx',
      'dir/__tests__/target.js',
      'dir/__tests__/target.jsx',
      'dir/__tests__/dir/target.js',
      'dir/__tests__/dir/target.jsx',

      'target.spec.js',
      'target.spec.jsx',
      'target.test.js',
      'target.test.jsx',
      'dir/target.spec.js',
      'dir/target.spec.jsx',
      'dir/target.test.js',
      'dir/target.test.jsx',

      '__mocks__/target.js',
      '__mocks__/target.jsx',
      '__mocks__/dir/target.js',
      '__mocks__/dir/target.jsx',
      'dir/__mocks__/target.js',
      'dir/__mocks__/target.jsx',
      'dir/__mocks__/dir/target.js',
      'dir/__mocks__/dir/target.jsx',
    ],
    for: 'test and mock',
  })
})
