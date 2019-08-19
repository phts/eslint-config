'use strict'

const helpers = require('../helpers')

describe('addons/prettier', () => {
  helpers.itGeneratesCorrectConfig({
    files: [
      'target.js',
      'target.jsx',
      'target.ts',
      'target.tsx',
      'dir/target.js',
      'dir/target.jsx',
      'dir/target.ts',
      'dir/target.tsx',
    ],
    for: '*.{js,jsx,ts,tsx}',
    extends: ['index', 'addons/prettier'],
  })
})
