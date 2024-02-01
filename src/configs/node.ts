import { shared } from '../utils/shared.js'
import { securityPlugin } from '../plugins/security.js'
import { type EslintConfig } from '../types.js'

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
  settings: { ...shared.settings, ...securityPlugin.settings },
  plugins: [...shared.plugins, securityPlugin.name],
  extends: [
    ...shared.extends,
    ...securityPlugin.extends,

    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#readme
    'prettier',
  ],
  // https://typescript-eslint.io/rules
  rules: {
    ...shared.rules,
    ...securityPlugin.rules,

    // https://typescript-eslint.io/rules/no-shadow
    '@typescript-eslint/no-shadow': 'error',

    // Type `method` for consistent function scoping
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    // https://typescript-eslint.io/rules/parameter-properties
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        allow: ['private', 'private readonly', 'public', 'public readonly'],
      },
    ],
  },
}
