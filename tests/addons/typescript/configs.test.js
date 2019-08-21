'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/configs', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/configs'],
    files: [
      'config/target.ts',
      'config/dir/target.ts',

      '.target.ts',

      'webpack.dev.ts',
      'dir/webpack.prod.ts',

      'target.config.ts',
      'dir/target.config.ts',
    ],
    for: 'config',
  })
})
