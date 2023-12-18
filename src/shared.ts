export default {
  // Stylistic
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
    },
  ],
  '@typescript-eslint/method-signature-style': ['error', 'method'],

  // Javascript
  'no-void': 'error',
  'multiline-ternary': 'off',
  'prefer-template': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

  // Typescript
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
} as const
