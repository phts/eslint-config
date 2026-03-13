'use strict'

const helpers = require('../helpers')

describe('addons/prettier', () => {
  helpers.itGeneratesCorrectConfig({
    files: [
      'target.js',
      'target.jsx',
      'target.ts',
      'target.tsx',
      'target.mts',
      'dir/target.js',
      'dir/target.jsx',
      'dir/target.ts',
      'dir/target.tsx',
      'dir/target.mts',
    ],
    for: '*.{js,jsx,ts,tsx,mts}',
    extends: ['index', 'addons/prettier'],
  })
})
