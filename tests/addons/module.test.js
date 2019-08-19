'use strict'

const helpers = require('../helpers')

describe('addons/module', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/module'],
    files: ['src/target.js', 'src/dir/target.js'],
    for: 'src/**/*.js',
  })
})
