import { definePlugin } from '../utils/define.js'
import { extendPluginRules } from '../utils/mappers.js'
import _typescriptPlugin from '@typescript-eslint/eslint-plugin'
import _standardWithTypescriptConfig from 'eslint-config-standard-with-typescript'

// https://typescript-eslint.io/getting-started
export const typescriptPlugin = definePlugin<string>({
  name: '@typescript-eslint',
  settings: {},
  // https://typescript-eslint.io/rules
  rules: {
    ...extendPluginRules(
      '@typescript-eslint',
      _typescriptPlugin.configs['strict-type-checked']
    ),

    // Replaces JS linting rules for TS linting rules, and adds `standard` configuration
    // https://github.com/mightyiam/eslint-config-standard-with-typescript#readme
    ..._standardWithTypescriptConfig.rules,

    // https://typescript-eslint.io/rules/no-inferrable-types
    '@typescript-eslint/no-inferrable-types': 'off',

    // https://typescript-eslint.io/rules/default-param-last
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // https://typescript-eslint.io/rules/class-methods-use-this
    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': [
      'error',
      { ignoreClassesThatImplementAnInterface: true },
    ],

    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // https://typescript-eslint.io/rules/explicit-member-accessibility
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // https://typescript-eslint.io/rules/init-declarations
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    // https://typescript-eslint.io/rules/max-params
    'max-params': 'off',
    '@typescript-eslint/max-params': 'error',

    // https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/member-ordering': 'off',

    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // https://typescript-eslint.io/rules/no-empty-function
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    // Disabled in favor of `@typescript-eslint/consistent-type-imports`
    // https://typescript-eslint.io/rules/no-import-type-side-effects
    '@typescript-eslint/no-import-type-side-effects': 'off',

    // https://typescript-eslint.io/rules/no-invalid-this
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'off',

    // https://typescript-eslint.io/rules/no-loop-func
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // https://typescript-eslint.io/rules/no-magic-numbers
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: false,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'error',

    // https://typescript-eslint.io/rules/no-restricted-imports/
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',

    // https://typescript-eslint.io/rules/no-shadow
    '@typescript-eslint/no-shadow': 'error',

    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // https://typescript-eslint.io/rules/no-unsafe-unary-minus
    '@typescript-eslint/no-unsafe-unary-minus': 'error',

    // https://typescript-eslint.io/rules/no-useless-empty-export
    '@typescript-eslint/no-useless-empty-export': 'error',

    // https://typescript-eslint.io/rules/parameter-properties
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        prefer: 'parameter-property',
        allow: ['private', 'private readonly', 'public', 'public readonly'],
      },
    ],

    // https://typescript-eslint.io/rules/prefer-destructuring
    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': [
      'error',
      {
        object: true,
        array: true,
      },
      {
        enforceForRenamedProperties: false,
        enforceForDeclarationWithTypeAnnotation: true,
      },
    ],

    // https://typescript-eslint.io/rules/prefer-enum-initializers
    '@typescript-eslint/prefer-enum-initializers': 'error',

    // https://typescript-eslint.io/rules/prefer-for-of
    '@typescript-eslint/prefer-for-of': 'error',

    // https://typescript-eslint.io/rules/prefer-namespace-keyword
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // https://typescript-eslint.io/rules/prefer-regexp-exec
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // https://typescript-eslint.io/rules/sort-type-constituents
    '@typescript-eslint/sort-type-constituents': 'off',

    // https://typescript-eslint.io/rules/typedef
    '@typescript-eslint/typedef': 'off',

    // https://typescript-eslint.io/rules/prefer-readonly
    '@typescript-eslint/prefer-readonly': 'off',

    // https://typescript-eslint.io/rules/strict-boolean-expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

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
