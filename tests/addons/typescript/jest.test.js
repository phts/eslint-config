'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/jest', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/jest'],
    files: [
      '__tests__/target.ts',
      '__tests__/target.tsx',
      '__tests__/target.mts',
      '__tests__/dir/target.ts',
      '__tests__/dir/target.tsx',
      '__tests__/dir/target.mts',
      'dir/__tests__/target.ts',
      'dir/__tests__/target.tsx',
      'dir/__tests__/target.mts',
      'dir/__tests__/dir/target.ts',
      'dir/__tests__/dir/target.tsx',
      'dir/__tests__/dir/target.mts',

      'target.spec.ts',
      'target.spec.tsx',
      'target.spec.mts',
      'target.test.ts',
      'target.test.tsx',
      'target.test.mts',
      'dir/target.spec.ts',
      'dir/target.spec.tsx',
      'dir/target.spec.mts',
      'dir/target.test.ts',
      'dir/target.test.tsx',
      'dir/target.test.mts',

      '__mocks__/target.ts',
      '__mocks__/target.tsx',
      '__mocks__/target.mts',
      '__mocks__/dir/target.ts',
      '__mocks__/dir/target.tsx',
      '__mocks__/dir/target.mts',
      'dir/__mocks__/target.ts',
      'dir/__mocks__/target.tsx',
      'dir/__mocks__/target.mts',
      'dir/__mocks__/dir/target.ts',
      'dir/__mocks__/dir/target.tsx',
      'dir/__mocks__/dir/target.mts',
    ],
    for: 'test and mock',
  })
})
