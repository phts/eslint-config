'use strict'

module.exports = {
  extends: [
    'plugin:react/recommended',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: '*.{ts,tsx}',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        useJSXTextNode: true,
      },
      env: {
        browser: true,
        node: false,
      },
    },
  ],
}
