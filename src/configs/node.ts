import { shared } from '../utils/shared.js'
import { type EslintConfig } from '../utils/types.js'

export const nodeConfig: EslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2022: true,
    node: true,
  },
  settings: shared.settings,
  plugins: [...shared.plugins],
  extends: [...shared.extends, 'prettier'],
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
}
