import { shared } from '../utils/shared.js'
import { type EslintConfig } from '../utils/types.js'

export const reactConfig: EslintConfig = {
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
  settings: {
    ...shared.settings,
    react: {
      version: 'detect',
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: [...shared.plugins, 'react', 'react-hooks'],
  extends: [...shared.extends, 'standard-jsx', 'standard-react', 'prettier'],
  rules: {
    ...shared.rules,

    /**
     * React conflicted rules
     */
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    'import/no-nodejs-modules': 'error',

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
