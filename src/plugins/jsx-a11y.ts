import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#readme
export const jsxA11yPlugin = definePlugin({
  name: 'jsx-a11y',
  source: _jsxA11yPlugin,
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules
  rules: {
    ...extendPluginRules('jsx-a11y', _jsxA11yPlugin.configs.strict),

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-autofocus.md
    'jsx-a11y/no-autofocus': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/lang.md
    'jsx-a11y/lang': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/anchor-ambiguous-text.md
    'jsx-a11y/anchor-ambiguous-text': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/no-aria-hidden-on-focusable.md
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/prefer-tag-over-role.md
    'jsx-a11y/prefer-tag-over-role': 'off',
  },
  testRules: {},
})
