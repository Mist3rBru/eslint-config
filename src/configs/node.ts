import { securityPlugin } from '../plugins/security.js'
import { defineConfig } from '../utils/define.js'
import { shared } from '../utils/shared.js'
import _prettierConfig from 'eslint-config-prettier'

export const nodeConfig = defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2022: true,
    node: true,
  },
  settings: { ...shared.settings, ...securityPlugin.settings },
  plugins: [...shared.plugins, securityPlugin.name],
  // https://typescript-eslint.io/rules
  rules: {
    ...shared.rules,
    ...securityPlugin.rules,
    ..._prettierConfig.rules,

    // Type `method` for consistent function scoping
    // https://typescript-eslint.io/rules/method-signature-style
    '@typescript-eslint/method-signature-style': ['error', 'method'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',
  },
})
