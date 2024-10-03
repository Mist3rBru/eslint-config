import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import eslint from '@eslint/js'

export const jsIgnoredRules = [
  // https://eslint.org/docs/latest/rules/accessor-pairs
  'accessor-pairs',

  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style',

  // https://eslint.org/docs/latest/rules/block-scoped-var
  'block-scoped-var',

  // https://eslint.org/docs/latest/rules/capitalized-comments
  'capitalized-comments',

  // https://eslint.org/docs/latest/rules/complexity
  'complexity',

  // https://eslint.org/docs/latest/rules/consistent-return
  'consistent-return',

  // https://eslint.org/docs/latest/rules/consistent-this
  'consistent-this',

  // https://eslint.org/docs/latest/rules/default-case
  'default-case',

  // https://eslint.org/docs/latest/rules/default-case-last
  'default-case-last',

  // https://eslint.org/docs/latest/rules/func-name-matching
  'func-name-matching',

  // https://eslint.org/docs/latest/rules/func-names
  'func-names',

  // https://eslint.org/docs/latest/rules/func-style
  'func-style',

  // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
  'grouped-accessor-pairs',

  // https://eslint.org/docs/latest/rules/guard-for-in
  'guard-for-in',

  // https://eslint.org/docs/latest/rules/id-denylist
  'id-denylist',

  // https://eslint.org/docs/latest/rules/id-length
  'id-length',

  // https://eslint.org/docs/latest/rules/id-match
  'id-match',

  // https://eslint.org/docs/latest/rules/line-comment-position
  'line-comment-position',

  // https://eslint.org/docs/latest/rules/max-classes-per-file
  'max-classes-per-file',

  // https://eslint.org/docs/latest/rules/max-depth
  'max-depth',

  // https://eslint.org/docs/latest/rules/max-lines
  'max-lines',

  // https://eslint.org/docs/latest/rules/max-lines-per-function
  'max-lines-per-function',

  // https://eslint.org/docs/latest/rules/max-nested-callbacks
  'max-nested-callbacks',

  // https://eslint.org/docs/latest/rules/max-statements
  'max-statements',

  // https://eslint.org/docs/latest/rules/multiline-comment-style
  'multiline-comment-style',

  // https://eslint.org/docs/latest/rules/new-cap
  'new-cap',

  // https://eslint.org/docs/latest/rules/no-alert
  'no-alert',

  // https://eslint.org/docs/latest/rules/no-await-in-loop
  'no-await-in-loop',

  // https://eslint.org/docs/latest/rules/no-caller
  'no-caller',

  // https://eslint.org/docs/latest/rules/no-constant-binary-expression
  'no-constant-binary-expression',

  // https://eslint.org/docs/latest/rules/no-constructor-return
  'no-constructor-return',

  // https://eslint.org/docs/latest/rules/no-continue
  'no-continue',

  // https://eslint.org/docs/latest/rules/no-div-regex
  'no-div-regex',

  // https://eslint.org/docs/latest/rules/no-else-return
  'no-else-return',

  // https://eslint.org/docs/latest/rules/no-empty-static-block
  'no-empty-static-block',

  // https://eslint.org/docs/latest/rules/no-eq-null
  'no-eq-null',

  // https://eslint.org/docs/latest/rules/no-eval
  'no-eval',

  // https://eslint.org/docs/latest/rules/no-extend-native
  'no-extend-native',

  // https://eslint.org/docs/latest/rules/no-extra-bind
  'no-extra-bind',

  // https://eslint.org/docs/latest/rules/no-extra-label
  'no-extra-label',

  // https://eslint.org/docs/latest/rules/no-implicit-coercion
  'no-implicit-coercion',

  // https://eslint.org/docs/latest/rules/no-implicit-globals
  'no-implicit-globals',

  // https://eslint.org/docs/latest/rules/no-inline-comments
  'no-inline-comments',

  // https://eslint.org/docs/latest/rules/no-iterator
  'no-iterator',

  // https://eslint.org/docs/latest/rules/no-label-var
  'no-label-var',

  // https://eslint.org/docs/latest/rules/no-labels
  'no-labels',

  // https://eslint.org/docs/latest/rules/no-lone-blocks
  'no-lone-blocks',

  // https://eslint.org/docs/latest/rules/no-lonely-if
  'no-lonely-if',

  // https://eslint.org/docs/latest/rules/no-multi-assign
  'no-multi-assign',

  // https://eslint.org/docs/latest/rules/no-multi-str
  'no-multi-str',

  // https://eslint.org/docs/latest/rules/no-negated-condition
  'no-negated-condition',

  // https://eslint.org/docs/latest/rules/no-nested-ternary
  'no-nested-ternary',

  // https://eslint.org/docs/latest/rules/no-new
  'no-new',

  // https://eslint.org/docs/latest/rules/no-new-func
  'no-new-func',

  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor',

  // https://eslint.org/docs/latest/rules/no-new-wrappers
  'no-new-wrappers',

  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor',

  // https://eslint.org/docs/latest/rules/no-octal-escape
  'no-octal-escape',

  // https://eslint.org/docs/latest/rules/no-param-reassign
  'no-param-reassign',

  // https://eslint.org/docs/latest/rules/no-plusplus
  'no-plusplus',

  // https://eslint.org/docs/latest/rules/no-promise-executor-return
  'no-promise-executor-return',

  // https://eslint.org/docs/latest/rules/no-proto
  'no-proto',

  // https://eslint.org/docs/latest/rules/no-restricted-exports
  'no-restricted-exports',

  // https://eslint.org/docs/latest/rules/no-restricted-globals
  'no-restricted-globals',

  // https://eslint.org/docs/latest/rules/no-restricted-properties
  'no-restricted-properties',

  // https://eslint.org/docs/latest/rules/no-restricted-syntax
  'no-restricted-syntax',

  // https://eslint.org/docs/latest/rules/no-return-assign
  'no-return-assign',

  // https://eslint.org/docs/latest/rules/no-script-url
  'no-script-url',

  // https://eslint.org/docs/latest/rules/no-self-compare
  'no-self-compare',

  // https://eslint.org/docs/latest/rules/no-sequences
  'no-sequences',

  // https://eslint.org/docs/latest/rules/no-template-curly-in-string
  'no-template-curly-in-string',

  // https://eslint.org/docs/latest/rules/no-ternary
  'no-ternary',

  // https://eslint.org/docs/latest/rules/no-undef-init
  'no-undef-init',

  // https://eslint.org/docs/latest/rules/no-undefined
  'no-undefined',

  // https://eslint.org/docs/latest/rules/no-underscore-dangle
  'no-underscore-dangle',

  // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition',

  // https://eslint.org/docs/latest/rules/no-unneeded-ternary
  'no-unneeded-ternary',

  // https://eslint.org/docs/latest/rules/no-unreachable-loop
  'no-unreachable-loop',

  // https://eslint.org/docs/latest/rules/no-unused-private-class-members
  'no-unused-private-class-members',

  // https://eslint.org/docs/latest/rules/no-useless-call
  'no-useless-call',

  // https://eslint.org/docs/latest/rules/no-useless-computed-key
  'no-useless-computed-key',

  // https://eslint.org/docs/latest/rules/no-useless-concat
  'no-useless-concat',

  // https://eslint.org/docs/latest/rules/no-useless-rename
  'no-useless-rename',

  // https://eslint.org/docs/latest/rules/no-useless-return
  'no-useless-return',

  // https://eslint.org/docs/latest/rules/no-var
  'no-var',

  // https://eslint.org/docs/latest/rules/no-warning-comments
  'no-warning-comments',

  // https://eslint.org/docs/latest/rules/object-shorthand
  'object-shorthand',

  // https://eslint.org/docs/latest/rules/one-var
  'one-var',

  // https://eslint.org/docs/latest/rules/operator-assignment
  'operator-assignment',

  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  'prefer-arrow-callback',

  // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator',

  // https://eslint.org/docs/latest/rules/prefer-named-capture-group
  'prefer-named-capture-group',

  // https://eslint.org/docs/latest/rules/prefer-numeric-literals
  'prefer-numeric-literals',

  // https://eslint.org/docs/latest/rules/prefer-object-has-own
  'prefer-object-has-own',

  // https://eslint.org/docs/latest/rules/prefer-object-spread
  'prefer-object-spread',

  // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors',

  // https://eslint.org/docs/latest/rules/prefer-rest-params
  'prefer-rest-params',

  // https://eslint.org/docs/latest/rules/prefer-spread
  'prefer-spread',

  // https://eslint.org/docs/latest/rules/radix
  'radix',

  // https://eslint.org/docs/latest/rules/require-atomic-updates
  'require-atomic-updates',

  // https://eslint.org/docs/latest/rules/require-await
  'require-await',

  // https://eslint.org/docs/latest/rules/require-unicode-regexp
  'require-unicode-regexp',

  // https://eslint.org/docs/latest/rules/sort-imports
  'sort-imports',

  // https://eslint.org/docs/latest/rules/sort-keys
  'sort-keys',

  // https://eslint.org/docs/latest/rules/sort-vars
  'sort-vars',

  // https://eslint.org/docs/latest/rules/strict
  'strict',

  // https://eslint.org/docs/latest/rules/symbol-description
  'symbol-description',

  // https://eslint.org/docs/latest/rules/unicode-bom
  'unicode-bom',

  // https://eslint.org/docs/latest/rules/vars-on-top
  'vars-on-top',

  // https://eslint.org/docs/latest/rules/no-bitwise
  'no-bitwise',

  // https://eslint.org/docs/latest/rules/no-unexpected-multiline
  'no-unexpected-multiline',

  // https://eslint.org/docs/latest/rules/jsx-quotes
  'jsx-quotes',

  // https://eslint.org/docs/latest/rules/no-extra-semi
  'no-extra-semi',

  // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs',
]

export const tsEquivalentRules = [
  // https://typescript-eslint.io/rules/block-spacing
  'block-spacing',

  // https://typescript-eslint.io/rules/camelcase
  'camelcase',

  // https://typescript-eslint.io/rules/class-methods-use-this
  'class-methods-use-this',

  // https://typescript-eslint.io/rules/comma-spacing
  'comma-spacing',

  // https://typescript-eslint.io/rules/dot-notation
  'dot-notation',

  // https://typescript-eslint.io/rules/default-param-last
  'default-param-last',

  // https://typescript-eslint.io/rules/brace-style
  'brace-style',

  // https://typescript-eslint.io/rules/func-call-spacing
  'func-call-spacing',

  // https://typescript-eslint.io/rules/indent
  'indent',

  // https://typescript-eslint.io/rules/init-declarations
  'init-declarations',

  // https://typescript-eslint.io/rules/key-spacing
  'key-spacing',

  // https://typescript-eslint.io/rules/keyword-spacing
  'keyword-spacing',

  // https://typescript-eslint.io/rules/lines-between-class-members
  'lines-between-class-members',

  // https://typescript-eslint.io/rules/max-params
  'max-params',

  // https://typescript-eslint.io/rules/no-array-constructor
  'no-array-constructor',

  // https://typescript-eslint.io/rules/no-dupe-class-members
  'no-dupe-class-members',

  // https://typescript-eslint.io/rules/no-empty-function
  'no-empty-function',

  // https://typescript-eslint.io/rules/no-extra-parens
  'no-extra-parens',

  // https://typescript-eslint.io/rules/no-implied-eval
  'no-implied-eval',

  // https://typescript-eslint.io/rules/no-invalid-this
  'no-invalid-this',

  // https://typescript-eslint.io/rules/no-loop-func
  'no-loop-func',

  // https://typescript-eslint.io/rules/no-loss-of-precision
  'no-loss-of-precision',

  // https://typescript-eslint.io/rules/no-magic-numbers
  'no-magic-numbers',

  // https://typescript-eslint.io/rules/no-redeclare
  'no-redeclare',

  // https://typescript-eslint.io/rules/no-restricted-imports
  'no-restricted-imports',

  // https://typescript-eslint.io/rules/no-shadow
  'no-shadow',

  // https://typescript-eslint.io/rules/no-throw-literal
  'no-throw-literal',

  // https://typescript-eslint.io/rules/no-multiple-empty-lines
  'no-multiple-empty-lines',

  // https://typescript-eslint.io/rules/no-return-await
  'no-return-await',

  // https://typescript-eslint.io/rules/no-undef
  'no-undef',

  // https://typescript-eslint.io/rules/no-unused-vars
  'no-unused-vars',

  // https://typescript-eslint.io/rules/no-unused-expressions
  'no-unused-expressions',

  // https://typescript-eslint.io/rules/no-use-before-define
  'no-use-before-define',

  // https://typescript-eslint.io/rules/no-useless-constructor
  'no-useless-constructor',

  // https://typescript-eslint.io/rules/object-curly-spacing
  'object-curly-spacing',

  // https://typescript-eslint.io/rules/prefer-destructuring
  'prefer-destructuring',

  // https://typescript-eslint.io/rules/quotes
  'quotes',

  // https://typescript-eslint.io/rules/semi
  'semi',

  // https://typescript-eslint.io/rules/space-before-blocks
  'space-before-blocks',

  // https://typescript-eslint.io/rules/space-before-function-paren
  'space-before-function-paren',

  // https://typescript-eslint.io/rules/space-infix-ops
  'space-infix-ops',
]

export const javascriptPlugin = definePlugin({
  name: '',
  source: eslint,
  // https://eslint.org/docs/latest/rules/
  rules: {
    ...extendPluginRules('', eslint.configs.recommended),

    // https://eslint.org/docs/latest/rules/no-void
    'no-void': ['error', { allowAsStatement: true }],

    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/latest/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // Disabled in favor of @typescript-eslint/consistent-type-imports and import/consistent-type-specifier-style
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',

    // https://eslint.org/docs/latest/rules/no-console
    'no-console': ['error', { allow: ['error'] }],

    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    'logical-assignment-operators': ['error', 'always'],

    // https://eslint.org/docs/latest/rules/array-callback-return
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: true,
      },
    ],

    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['error', 'always'],

    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': ['error', { destructuring: 'all' }],

    // https://eslint.org/docs/latest/rules/yoda
    yoda: ['error', 'never', { exceptRange: true }],

    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'all'],

    ...Object.fromEntries(
      [...tsEquivalentRules, ...jsIgnoredRules].map(rule => [rule, 'off'])
    ),

    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': 'off',

    // https://eslint.org/docs/latest/rules/no-useless-assignment
    'no-useless-assignment': 'error',
  },
  testRules: {
    // Deprecated and conflicts with jest.Mock infer
    // https://eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'off',
  },
})
