import { definePlugin } from '../utils/define.js'
import _standardWithTypescriptConfig from 'eslint-config-standard-with-typescript'

// https://typescript-eslint.io/getting-started
export const typescriptPlugin = definePlugin({
  name: '@typescript-eslint',
  settings: {},
  // https://typescript-eslint.io/rules
  rules: {
    // Replaces JS linting rules for TS linting rules, and adds `standard` configuration
    // https://github.com/mightyiam/eslint-config-standard-with-typescript#readme
    ..._standardWithTypescriptConfig.rules,

    // https://typescript-eslint.io/rules/no-namespace
    '@typescript-eslint/no-namespace': 'off',

    // https://typescript-eslint.io/rules/prefer-readonly
    '@typescript-eslint/prefer-readonly': 'off',

    // https://typescript-eslint.io/rules/strict-boolean-expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': 'error',

    // https://typescript-eslint.io/rules/no-non-null-assertion
    '@typescript-eslint/no-non-null-assertion': 'error',

    // https://typescript-eslint.io/rules/no-confusing-void-expression
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true, ignoreVoidOperator: true },
    ],

    // https://typescript-eslint.io/rules/restrict-template-expressions
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNullish: true, allowAny: true },
    ],

    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      { ignoreConditionalTests: true },
    ],

    // https://typescript-eslint.io/rules/explicit-function-return-type
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
    ],

    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],

    // https://typescript-eslint.io/rules/array-type
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    // https://typescript-eslint.io/rules/padding-line-between-statements
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'interface',
          'type',
          'block',
          'block-like',
          'class',
          'export',
          'for',
          'function',
          'if',
          'do',
          'iife',
          'continue',
          'return',
          'switch',
          'try',
          'while',
          'throw',
        ],
      },
    ],

    // https://typescript-eslint.io/rules/no-unnecessary-condition
    '@typescript-eslint/no-unnecessary-condition': 'error',
  },
  testRules: {
    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': 'off',

    // https://typescript-eslint.io/rules/ban-ts-comment
    '@typescript-eslint/ban-ts-comment': 'off',

    // https://typescript-eslint.io/rules/consistent-type-assertions
    '@typescript-eslint/consistent-type-assertions': 'off',

    // https://typescript-eslint.io/rules/no-non-null-assertion
    '@typescript-eslint/no-non-null-assertion': 'off',

    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

    // https://typescript-eslint.io/rules/explicit-function-return-type
    '@typescript-eslint/explicit-function-return-type': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-argument
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
})
