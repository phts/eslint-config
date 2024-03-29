# @phts/eslint-config

[![GitHub Actions](https://github.com/phts/eslint-config/workflows/workflow/badge.svg)](https://github.com/phts/eslint-config)
[![npm](https://img.shields.io/npm/v/@phts/eslint-config.svg)](https://www.npmjs.com/package/@phts/eslint-config)

My config for ESLint.

## Install

```
$ npm i -D @phts/eslint-config
```

## Usage

### Basic rules

`.eslintrc.json`:

```json
{
  "extends": "@phts"
}
```

### Prettier

```json
{
  "extends": ["@phts", "@phts/eslint-config/addons/prettier"]
}
```

Enable support for Prettier via [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) and [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) for all `.js`, `.jsx`, `.ts`, `.tsx` files in the project.

Prettier must be installed manually:

```
$ npm i -D prettier
```

Make sure to put this addon **last**, so it gets the chance to override other configs.

### TypeScript

[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)
and [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) are used under the hood.

`.eslintrc.json`:

```json
{
  "extends": ["@phts", "@phts/eslint-config/addons/typescript"]
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
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "SublimeLinter.linters.eslint.selector": "source.js, source.ts, source.tsx",
    "SublimeLinter.linters.tslint.disable": true
  }
}
```

VS Code workspace:

```json
{
  "settings": {
    // ...
    "eslint.validate": ["typescript", "typescriptreact"]
  }
}
```

### Other addons

<table>
  <tr>
    <td><code>configs</code></td>
    <td>Enable Node.js environment for all combinations of config files</td>
  </tr>
  <tr>
    <td><code>jest</code></td>
    <td>Enable <a href="https://jestjs.io/">jest</a> environment for <a href="https://jestjs.io/docs/en/configuration#testregex-string-array-string">test files</a></td>
  </tr>
  <tr>
    <td><code>module</code></td>
    <td>Enable ES-modules for <code>.js</code> files in <code>src/</code> folder</td>
  </tr>
  <tr>
    <td><code>node</code></td>
    <td>Enable Node.js environment for all <code>.js</code> files</td>
  </tr>
  <tr>
    <td><code>react</code></td>
    <td>Enable support for <a href="https://reactjs.org/">react</a> for <code>.js</code> and <code>.jsx</code> files in <code>src/</code> folder</td>
  </tr>
  <tr>
    <td><code>typescript/configs</code></td>
    <td>Enable Node.js environment for all combinations of config files written in TypeScript</td>
  </tr>
  <tr>
    <td><code>typescript/jest</code></td>
    <td>Enable <a href="https://jestjs.io/">jest</a> environment for <a href="https://jestjs.io/docs/en/configuration#testregex-string-array-string">test files</a></td>
  </tr>
  <tr>
    <td><code>typescript/node</code></td>
    <td>Enable Node.js environment for all <code>.ts</code> files</td>
  </tr>
  <tr>
    <td><code>typescript/react</code></td>
    <td>Enable support for <a href="https://reactjs.org/">react</a> for <code>.ts</code> and <code>.tsx</code> files in <code>src/</code> folder</td>
  </tr>
</table>
