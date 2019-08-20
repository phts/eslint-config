'use strict'

const helpers = require('../helpers')

describe('addons/configs', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/configs'],
    files: [
      'config/target.js',
      'config/dir/target.js',

      '.target.js',

      'webpack.dev.js',
      'dir/webpack.prod.js',

      'target.config.js',
      'dir/target.config.js',

      'target.conf.js',
      'dir/target.conf.js',
    ],
    for: 'config',
  })

  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/configs'],
    files: ['config/jest.js', 'config/dir/jest.js'],
    for: 'jest setupFilesAfterEnv',
  })
})
