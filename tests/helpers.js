'use strict'
/* global expect, it */

const CLIEngine = require('eslint').CLIEngine

function getCli(config) {
  return new CLIEngine({
    baseConfig: {
      ...config,
      extends: config.extends.map(x => `../${x}`).map(require.resolve),
    },
    useEslintrc: false,
  })
}

function expectAllSame(arr) {
  arr.forEach(x => expect(x).toEqual(arr[0]))
}

function expectConfigsToMatchSnapshot(configs) {
  const config = configs[0]
  if (config.parser) {
    config.parser = config.parser.replace(/\\/g, '/').replace(/^.*(node_modules\/.*)$/, '$1')
  }
  expect(config).toMatchSnapshot()
}

function itGeneratesCorrectConfig(opts) {
  it(`generates correct config for ${opts.for} files`, () => {
    const cli = getCli({
      extends: opts.extends,
    })
    const configs = opts.files.map(x => cli.getConfigForFile(x))
    expectAllSame(configs)
    expectConfigsToMatchSnapshot(configs)
  })
}

module.exports = {
  expectAllSame,
  expectConfigsToMatchSnapshot,
  getCli,
  itGeneratesCorrectConfig,
}
