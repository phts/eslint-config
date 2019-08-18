'use strict'

const reactConfig = require('../react')

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: reactConfig.settings,
  plugins: reactConfig.plugins,
  env: reactConfig.env,
  rules: reactConfig.rules,
}
