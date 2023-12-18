import shared from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'standard-jsx', 'standard-react'],
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
    ...shared,

    // Typescript
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    // React
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-newline': 'off',

    // JSX
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
