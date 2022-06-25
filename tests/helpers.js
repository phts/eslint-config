'use strict'

const ESLint = require('eslint').ESLint

function getEslint(config) {
  return new ESLint({
    baseConfig: {
      ...config,
      extends: config.extends.map((x) => `../${x}`).map(require.resolve),
    },
    useEslintrc: false,
  })
}

function expectAllSame(arr) {
  arr.forEach((x) => expect(x).toEqual(arr[0]))
}

function expectConfigsToMatchSnapshot(configs) {
  const config = configs[0]
  if (config.parser) {
    config.parser = config.parser.replace(/\\/g, '/').replace(/^.*(node_modules\/.*)$/, '$1')
  }
  expect(config).toMatchSnapshot()
}

function itGeneratesCorrectConfig(opts) {
  // eslint-disable-next-line jest/expect-expect
  it(`generates correct config for ${opts.for} files`, async () => {
    const eslint = getEslint({
      extends: opts.extends,
    })
    const configs = await Promise.all(opts.files.map((x) => eslint.calculateConfigForFile(x)))
    expectAllSame(configs)
    expectConfigsToMatchSnapshot(configs)
  })
}

// eslint-disable-next-line jest/no-export
module.exports = {
  expectAllSame,
  expectConfigsToMatchSnapshot,
  itGeneratesCorrectConfig,
}
