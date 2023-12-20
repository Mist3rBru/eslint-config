export default {
  'no-void': 'error',
  'prefer-template': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
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

  'unicorn/no-keyword-prefix': 'error',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/no-array-callback-reference': 'error',
  'unicorn/switch-case-braces': ['error', 'avoid'],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-null': 'off',
}
