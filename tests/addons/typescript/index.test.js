'use strict'

const helpers = require('../../helpers')

describe('addons/typescript', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript'],
    files: ['target.ts', 'target.tsx', 'target.mts', 'dir/target.ts', 'dir/target.tsx', 'dir/target.mts'],
    for: '*.{ts,tsx,mts}',
  })

  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript'],
    files: ['target.d.ts', 'dir/target.d.ts'],
    for: '*.d.ts',
  })
})
