'use strict'

const helpers = require('../helpers')

describe('addons/react', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/react'],
    files: ['src/target.js', 'src/target.jsx', 'src/dir/target.js', 'src/dir/target.jsx'],
    for: 'src/**/*.{js,jsx}',
  })
})
