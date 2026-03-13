'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/configs', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/configs'],
    files: [
      'config/target.ts',
      'config/target.mts',
      'config/dir/target.ts',
      'config/dir/target.mts',

      '.target.ts',
      '.target.mts',

      'webpack.dev.ts',
      'webpack.dev.mts',
      'dir/webpack.prod.ts',
      'dir/webpack.prod.mts',

      'target.config.ts',
      'target.config.mts',
      'dir/target.config.ts',
      'dir/target.config.mts',
    ],
    for: 'config',
  })
})
