import { jsxA11yPlugin } from '../plugins/jsx-a11y.js'
import { reactHooksPlugin } from '../plugins/react-hooks.js'
import { reactPlugin } from '../plugins/react.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TS_TSX } from '../utils/globs.js'

export const reactConfig = defineConfig({
  files: [GLOB_TS_TSX],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly',
  },
  plugins: [...sharedPlugins, reactPlugin, reactHooksPlugin, jsxA11yPlugin],
  extendPlugins: 'rules',
  rules: {
    // https://eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'off',

    // https://typescript-eslint.io/rules/no-empty-function
    '@typescript-eslint/no-empty-function': 'off',

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
})
