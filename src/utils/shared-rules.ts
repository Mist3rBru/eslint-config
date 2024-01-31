import { type EslintRules } from './types'

export const sharedRules: EslintRules = {
  'no-void': 'error',
  'prefer-template': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'no-duplicate-imports': 'error',

  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true, ignoreVoidOperator: true },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNullish: true, allowAny: true },
  ],
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    { ignoreConditionalTests: true },
  ],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/array-type': ['error', { default: 'array' }],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
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
  '@typescript-eslint/no-unnecessary-condition': 'error',

  'unicorn/no-keyword-prefix': 'off',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/consistent-destructuring': 'error',
  'unicorn/no-array-callback-reference': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-ternary': 'error',
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/better-regex': 'error',
  'unicorn/error-message': 'error',
  'unicorn/switch-case-braces': ['error', 'avoid'],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-null': 'off',

  'promise/always-return': ['error', { ignoreLastCallback: true }],

  'no-secrets/no-secrets': 'error',

  'deprecation/deprecation': 'error',
}

export const sharedTestRules: EslintRules = {
  'no-extra-semi': 'off',

  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',

  'unicorn/error-message': 'off',

  'security/detect-buffer-noassert': 'off',
  'security/detect-child-process': 'off',
  'security/detect-disable-mustache-escape': 'off',
  'security/detect-eval-with-expression': 'off',
  'security/detect-new-buffer': 'off',
  'security/detect-no-csrf-before-method-override': 'off',
  'security/detect-non-literal-fs-filename': 'off',
  'security/detect-non-literal-regexp': 'off',
  'security/detect-non-literal-require': 'off',
  'security/detect-object-injection': 'off',
  'security/detect-possible-timing-attacks': 'off',
  'security/detect-pseudoRandomBytes': 'off',
  'security/detect-unsafe-regex': 'off',
  'security/detect-bidi-characters': 'off',

  'no-secrets/no-secrets': 'off',
}
