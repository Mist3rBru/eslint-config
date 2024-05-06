import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _reactPlugin from 'eslint-plugin-react'

// https://github.com/jsx-eslint/eslint-plugin-react#readme
export const reactPlugin = definePlugin({
  name: 'react',
  settings: {
    react: {
      version: 'detect',
    },
  },
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules
  rules: {
    ...extendPluginRules('react', _reactPlugin.configs.all),

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': 'warn',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'error',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    'react/jsx-newline': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': 'off',

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': 'off',
  },
  testRules: {},
})
