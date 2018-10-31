'use strict'

module.exports = {
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'off',
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-scoped-var': 'off',
    'block-spacing': 'off',
    'brace-style': 'error',
    'callback-return': 'off',
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': 'off',
    'computed-property-spacing': 'off',
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'off',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'getter-return': 'error',
    'global-require': 'off',
    'guard-for-in': 'off',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': ['error', 2],
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error',  {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-len': ['error', {code: 100}],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-console': ['error', {allow: ['info', 'warn', 'error']}],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'off',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'off',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'off',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'off',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'off',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'off',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'off',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'off',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'off',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'off',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
    'object-shorthand': 'off',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'radix': 'off',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'semi-style': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'strict': 'error',
    'switch-colon-spacing': 'off',
    'symbol-description': 'off',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': 'error',
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'before'],
    'yoda': 'error',
  },
}
