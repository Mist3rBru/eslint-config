import { shared } from '../utils/shared.js'
import { type EslintConfig } from '../types.js'

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
  plugins: [
    ...shared.plugins,

    // https://github.com/jsx-eslint/eslint-plugin-react#readme
    'react',

    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme
    'react-hooks',
  ],
  extends: [
    ...shared.extends,

    // https://github.com/standard/eslint-config-standard-jsx?tab=readme-ov-file#readme
    'standard-jsx',

    // https://github.com/standard/eslint-config-standard-react?tab=readme-ov-file#readme
    'standard-react',

    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#readme
    'prettier',
  ],
  rules: {
    ...shared.rules,

    'jsx-quotes': ['error', 'prefer-double'],

    /**
     * React conflicted rules
     */
    // https://typescript-eslint.io/rules/no-shadow
    '@typescript-eslint/no-shadow': 'off',

    // https://typescript-eslint.io/rules/unbound-method
    '@typescript-eslint/unbound-method': 'off',

    // https://typescript-eslint.io/rules/no-misused-promises
    '@typescript-eslint/no-misused-promises': 'off',

    // https://typescript-eslint.io/rules/no-floating-promises
    '@typescript-eslint/no-floating-promises': 'off',

    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',
  },
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // https://eslint.org/docs/latest/rules/no-undef
        'no-undef': 'off',
      },
    },
  ],
}
