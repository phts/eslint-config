'use strict'

const reactConfig = require('../react').overrides[0]

module.exports = {
  overrides: [
    {
      files: 'src/**/*.{ts,tsx}',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: reactConfig.settings,
      plugins: reactConfig.plugins,
      env: reactConfig.env,
      rules: reactConfig.rules,
    },
  ],
}
