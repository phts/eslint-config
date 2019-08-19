'use strict'

const helpers = require('../helpers')

describe('addons/node', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/node'],
    files: ['target.js', 'dir/target.js'],
    for: '*.js',
  })
})
