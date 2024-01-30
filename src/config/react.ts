import { sharedRules } from '../utils/shared-rules.js'
import { type EslintConfig } from '../utils/types.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
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
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
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
  rules: {
    ...sharedRules,

    /**
     * React conflicted rules
     */
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],

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
} satisfies EslintConfig
