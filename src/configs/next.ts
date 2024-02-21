import { jsxA11yPlugin } from '../plugins/jsx-a11y.js'
import { nextPlugin } from '../plugins/next.js'
import { reactHooksPlugin } from '../plugins/react-hooks.js'
import { reactPlugin } from '../plugins/react.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import _prettierConfig from 'eslint-config-prettier'

export const nextConfig = defineConfig({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  globals: {
    JSX: true,
    React: true,
  },
  plugins: [
    ...sharedPlugins,
    reactPlugin,
    reactHooksPlugin,
    jsxA11yPlugin,
    nextPlugin,
  ],
  extendPlugins: 'rules',
  rules: {
    ..._prettierConfig.rules,

    // https://eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/alt-text.md
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'off',

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
