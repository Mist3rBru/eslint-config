import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _typescriptPlugin from '@typescript-eslint/eslint-plugin'

// https://typescript-eslint.io/getting-started
export const typescriptPlugin = definePlugin({
  name: '@typescript-eslint',
  settings: {},
  // https://typescript-eslint.io/rules
  rules: {
    ...extendPluginRules(
      '@typescript-eslint',
      _typescriptPlugin.configs['strict-type-checked']
    ),

    // https://typescript-eslint.io/rules/require-await
    '@typescript-eslint/require-await': 'warn',

    // https://typescript-eslint.io/rules/prefer-find
    '@typescript-eslint/prefer-find': 'error',

    // https://typescript-eslint.io/rules/no-inferrable-types
    '@typescript-eslint/no-inferrable-types': 'off',

    // https://typescript-eslint.io/rules/default-param-last
    '@typescript-eslint/default-param-last': 'error',

    // https://typescript-eslint.io/rules/class-methods-use-this
    '@typescript-eslint/class-methods-use-this': [
      'warn',
      { ignoreClassesThatImplementAnInterface: true },
    ],

    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // https://typescript-eslint.io/rules/explicit-member-accessibility
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // https://typescript-eslint.io/rules/init-declarations
    '@typescript-eslint/init-declarations': 'off',

    // https://typescript-eslint.io/rules/max-params
    '@typescript-eslint/max-params': 'warn',

    // https://typescript-eslint.io/rules/member-ordering
    '@typescript-eslint/member-ordering': 'off',

    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // https://typescript-eslint.io/rules/no-empty-function
    '@typescript-eslint/no-empty-function': 'error',

    // Disabled in favor of `@typescript-eslint/consistent-type-imports`
    // https://typescript-eslint.io/rules/no-import-type-side-effects
    '@typescript-eslint/no-import-type-side-effects': 'off',

    // https://typescript-eslint.io/rules/no-invalid-this
    '@typescript-eslint/no-invalid-this': 'off',

    // https://typescript-eslint.io/rules/no-loop-func
    '@typescript-eslint/no-loop-func': 'error',

    // https://typescript-eslint.io/rules/no-magic-numbers
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1],
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'error',

    // https://typescript-eslint.io/rules/no-restricted-imports
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
    '@typescript-eslint/prefer-destructuring': 'off',

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
      { allowNullish: true, allowAny: true, allowNumber: true },
    ],

    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      { ignoreConditionalTests: true },
    ],

    // https://typescript-eslint.io/rules/explicit-function-return-type
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],

    // https://typescript-eslint.io/rules/consistent-type-imports
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
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

    // https://typescript-eslint.io/rules/no-use-before-define
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        enums: false,
        variables: false,
        typedefs: false, // Only the TypeScript rule has this option.
      },
    ],

    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // https://typescript-eslint.io/rules/ban-ts-comment
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],

    // https://typescript-eslint.io/rules/ban-tslint-comment
    '@typescript-eslint/ban-tslint-comment': 'error',

    // https://typescript-eslint.io/rules/ban-types
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          Number: {
            message: 'Use number instead',
            fixWith: 'number',
          },
          Symbol: {
            message: 'Use symbol instead',
            fixWith: 'symbol',
          },
          BigInt: {
            message: 'Use bigint instead',
            fixWith: 'bigint',
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
            ].join('\n'),
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
          '{}': {
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
        },
      },
    ],

    // https://typescript-eslint.io/rules/class-literal-property-style
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // https://typescript-eslint.io/rules/consistent-generic-constructors
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],

    // https://typescript-eslint.io/rules/consistent-indexed-object-style
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // https://typescript-eslint.io/rules/consistent-type-assertions
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],

    // https://typescript-eslint.io/rules/consistent-type-definitions
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // https://typescript-eslint.io/rules/consistent-type-exports
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],

    // https://typescript-eslint.io/rules/dot-notation
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    // Type `method` for consistent function scoping
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    // https://typescript-eslint.io/rules/naming-convention
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],

    // https://typescript-eslint.io/rules/no-dupe-class-members
    '@typescript-eslint/no-dupe-class-members': 'off',

    // https://typescript-eslint.io/rules/no-empty-interface
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],

    // https://typescript-eslint.io/rules/no-redeclare
    '@typescript-eslint/no-redeclare': 'off',

    // https://typescript-eslint.io/rules/no-unused-expressions
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-extraneous-class
    '@typescript-eslint/no-extraneous-class': [
      'error',
      { allowWithDecorator: true },
    ],

    // https://typescript-eslint.io/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        ignoreRestSiblings: false,
      },
    ],

    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // https://typescript-eslint.io/rules/prefer-function-type
    '@typescript-eslint/prefer-function-type': 'error',

    // https://typescript-eslint.io/rules/prefer-optional-chain
    '@typescript-eslint/prefer-optional-chain': 'error',

    // https://typescript-eslint.io/rules/promise-function-async
    '@typescript-eslint/promise-function-async': 'error',

    // https://typescript-eslint.io/rules/require-array-sort-compare
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],

    // https://typescript-eslint.io/rules/return-await
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],

    // https://typescript-eslint.io/rules/no-namespace
    '@typescript-eslint/no-namespace': 'off',

    // https://typescript-eslint.io/rules/consistent-return
    '@typescript-eslint/consistent-return': 'off',

    // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
  },
  testRules: {
    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': 'off',

    // https://typescript-eslint.io/rules/no-empty-function
    '@typescript-eslint/no-empty-function': 'off',

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

    // https://typescript-eslint.io/rules/unbound-method
    '@typescript-eslint/unbound-method': 'off',

    // https://typescript-eslint.io/rules/no-magic-numbers
    '@typescript-eslint/no-magic-numbers': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-argument
    '@typescript-eslint/no-unsafe-argument': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-assignment
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-call
    '@typescript-eslint/no-unsafe-call': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-member-access
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-return
    '@typescript-eslint/no-unsafe-return': 'off',

    // https://typescript-eslint.io/rules/no-unsafe-unary-minus
    '@typescript-eslint/no-unsafe-unary-minus': 'off',

    // https://typescript-eslint.io/rules/no-unused-expressions
    '@typescript-eslint/no-unused-expressions': 'off',
  },
})
