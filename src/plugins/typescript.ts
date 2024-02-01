import { type EslintExtendPlugin, type EslintPlugin } from '../utils/types'

export const typescriptPlugin: EslintPlugin<'@typescript-eslint'> = {
  name: '@typescript-eslint',
  settings: {},
  extends: [
    'standard-with-typescript' as EslintExtendPlugin<'@typescript-eslint'>,
  ],
  rules: {
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
  },
  testRules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
}
