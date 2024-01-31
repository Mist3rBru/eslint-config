import { shared } from '../utils/shared.js'
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
    'plugin:deprecation/recommended',
    'prettier',
  ],
  env: {
    es2022: true,
    node: true,
  },
  settings: shared.settings,
  rules: {
    ...shared.rules,

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
