# @phts/eslint-config

[![npm](https://img.shields.io/npm/v/@phts/eslint-config.svg)](https://www.npmjs.com/package/@phts/eslint-config)

My ESLint config.

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

### Other addons

<table>
  <tr>
    <td><code>@phts/eslint-config/addons/jest</code></td>
    <td>Enable <a href="https://jestjs.io/">jest</a> environment for <a href="https://jestjs.io/docs/en/configuration#testregex-string-array-string">test files</a></td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/module</code></td>
    <td>Enable ES-modules</td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/node</code></td>
    <td>Enable Node.js environment</td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/react</code></td>
    <td>Enable support for <a href="https://reactjs.org/">react</a> for <code>.js[x]</code> files</td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/typescript/jest</code></td>
    <td>Enable <a href="https://jestjs.io/">jest</a> environment for <a href="https://jestjs.io/docs/en/configuration#testregex-string-array-string">test files</a></td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/typescript/node</code></td>
    <td>Enable Node.js environment for <code>.ts</code> files</td>
  </tr>
  <tr>
    <td><code>@phts/eslint-config/addons/typescript/react</code></td>
    <td>Enable support for <a href="https://reactjs.org/">react</a> for <code>.ts[x]</code> files</td>
  </tr>
</table>
