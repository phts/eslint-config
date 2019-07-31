'use strict'

module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      extends: ['plugin:prettier/recommended'],

      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
      },
    },
  ],
}
