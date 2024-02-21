import { reactHooksPlugin } from '../plugins/react-hooks.js'
import { reactPlugin } from '../plugins/react.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import _prettierConfig from 'eslint-config-prettier'

export const reactConfig = defineConfig({
  parserOptions: {
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
  plugins: [...sharedPlugins, reactPlugin, reactHooksPlugin],
  extendPlugins: 'rules',
  rules: {
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
