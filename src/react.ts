import { sharedRules } from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'promise',
    'unicorn',
    'no-secrets',
    'import',
    'deprecation',
  ],
  extends: [
    'standard-with-typescript',
    'standard-jsx',
    'standard-react',
    'plugin:promise/recommended',
    'plugin:unicorn/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:deprecation/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es2022: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...sharedRules,

    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    'react-hooks/exhaustive-deps': 'warn',

    'jsx-quotes': ['error', 'prefer-double'],
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
