'use strict'

const helpers = require('../../helpers')

describe('addons/typescript', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript'],
    files: ['target.ts', 'target.tsx', 'dir/target.ts', 'dir/target.tsx'],
    for: '*.{ts,tsx}',
  })

  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript'],
    files: ['target.d.ts', 'dir/target.d.ts'],
    for: '*.d.ts',
  })
})
