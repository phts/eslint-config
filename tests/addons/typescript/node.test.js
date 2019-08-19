'use strict'

const helpers = require('../../helpers')

describe('addons/typescript/node', () => {
  helpers.itGeneratesCorrectConfig({
    extends: ['index', 'addons/typescript', 'addons/typescript/node'],
    files: ['target.ts', 'dir/target.ts'],
    for: '*.ts',
  })
})
