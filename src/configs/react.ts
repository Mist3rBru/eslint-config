import { reactHooksPlugin, reactPlugin } from '../plugins/index.js'
import { defineConfig } from '../utils/define.js'
import { shared } from '../utils/shared.js'
import _prettierConfig from 'eslint-config-prettier'

export const reactConfig = defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2022: true,
    browser: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    ...shared.settings,
    ...reactPlugin.settings,
    ...reactHooksPlugin.settings,
  },
  plugins: [...shared.plugins, reactPlugin.name, reactHooksPlugin.name],
  rules: {
    ...shared.rules,
    ...reactPlugin.rules,
    ...reactHooksPlugin.rules,
    ..._prettierConfig.rules,

    'jsx-quotes': ['error', 'prefer-double'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'off',

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
})
