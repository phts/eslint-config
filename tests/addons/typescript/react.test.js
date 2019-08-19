'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/react', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/react'],
    files: ['src/target.ts', 'src/target.tsx', 'src/dir/target.ts', 'src/dir/target.tsx'],
    for: 'src/**/*.{ts,tsx}',
  })
})
