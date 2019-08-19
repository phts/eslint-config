'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/jest', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/jest'],
    files: [
      '__tests__/target.ts',
      '__tests__/target.tsx',
      '__tests__/dir/target.ts',
      '__tests__/dir/target.tsx',
      'dir/__tests__/target.ts',
      'dir/__tests__/target.tsx',
      'dir/__tests__/dir/target.ts',
      'dir/__tests__/dir/target.tsx',

      'target.spec.ts',
      'target.spec.tsx',
      'target.test.ts',
      'target.test.tsx',
      'dir/target.spec.ts',
      'dir/target.spec.tsx',
      'dir/target.test.ts',
      'dir/target.test.tsx',

      '__mocks__/target.ts',
      '__mocks__/target.tsx',
      '__mocks__/dir/target.ts',
      '__mocks__/dir/target.tsx',
      'dir/__mocks__/target.ts',
      'dir/__mocks__/target.tsx',
      'dir/__mocks__/dir/target.ts',
      'dir/__mocks__/dir/target.tsx',
    ],
    for: 'test and mock',
  })
})
