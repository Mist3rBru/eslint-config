import { sharedRules } from '../utils/shared-rules.js'
import { type EslintConfig } from '../utils/types.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'promise',
    'security',
    'unicorn',
    'import',
    'deprecation',
    'no-secrets',
  ],
  extends: [
    'standard-with-typescript',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:unicorn/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:deprecation/recommended',
    'prettier',
  ],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    ...sharedRules,

    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        allow: ['private', 'private readonly', 'public', 'public readonly'],
      },
    ],
  },
} satisfies EslintConfig
