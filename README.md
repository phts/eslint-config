# @phts/eslint-config

[![npm](https://img.shields.io/npm/v/@phts/eslint-config.svg)](https://www.npmjs.com/package/@phts/eslint-config)

My ESLint config.

## Install

```
$ npm i -D @phts/eslint-config
```

## Usage

### JavaScript

`.eslintrc.json`:

```json
{
  "extends": "@phts"
}
```

### TypeScript

[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
and [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) are used under the hood.

`.eslintrc.json`:

```json
{
  "extends": "@phts/eslint-config/typescript"
}
```

`package.json`:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.ts,.tsx ."
  }
}
```

SublimeText project:

```json
{
  "folders":
  [
    {
      "path": "."
    }
  ],
  "settings":
  {
      "SublimeLinter.linters.eslint.selector": "source.js, source.ts, source.tsx",
      "SublimeLinter.linters.tslint.disable": true
  }
}
```
