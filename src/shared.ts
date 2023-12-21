export const sharedRules = {
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

  'no-secrets/no-secrets': 'error',
}

export const sharedTestRules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',

  'unicorn/error-message': 'off',

  'no-secrets/no-secrets': 'off',

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

  'no-extra-semi': 'off',
}
