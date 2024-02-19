import { definePlugin } from '../utils/define.js'
import * as _importPlugin from 'eslint-plugin-import'

// https://github.com/import-js/eslint-plugin-import/tree/main#readme
export const importPlugin = definePlugin({
  name: 'import',
  settings: _importPlugin.configs.typescript.settings,
  // https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    'import/default': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    'import/export': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error', { 'prefer-inline': true }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
    'import/no-empty-named-blocks': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
    'import/no-unused-modules': 'warn',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'error',

    /**
     * TODO: wait competition of rule todo list
     * Then replace `eslint-plugin-deprecated` for this
     **/
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',

    // Disabled in favor of general `import/no-default-export`
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'off',

    // Disabled in favor of TS compilation
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': 'off',

    // Disabled in favor of `tsc` module resolution
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    'import/no-namespace': 'off',

    // Is being assigned individually
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    // 'import/no-nodejs-modules': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': 'off',
  },
  testRules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',
  },
})
