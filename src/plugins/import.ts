import { type EslintPlugin } from '../utils/types'

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx']
const allExtensions = [...typeScriptExtensions, '.js', '.jsx']

export const importPlugin: EslintPlugin = {
  name: 'eslint-plugin-import',
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': typeScriptExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  extends: [],
  rules: {
    /**
     * Rules: https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
     */
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-cycle': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-named-default': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/namespace': 'error',

    // Turned off rules
    /**
     * TODO: wait competition of rule todo list on https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md.
     * Then replace eslint-plugin-deprecated for this
     *  */
    'import/no-deprecated': 'off',
    // Duplicates `import/no-default-export` behavior
    'import/no-anonymous-default-export': 'off',
    // Duplicates TypeScript compilation
    'import/named': 'off',
    // Duplicates `tsc` module resolution
    'import/extensions': 'off',
    // Duplicates `@typescript-eslint/consistent-type-imports`
    'import/consistent-type-specifier-style': 'off',
    'import/exports-last': 'off',
    'import/max-dependencies': 'off',
    'import/newline-after-import': 'off',
    'import/dynamic-import-chunkname': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    'import/group-exports': 'off',
    'import/no-import-module-exports': 'off',
    'import/no-internal-modules': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-amd': 'off',
  },
  testRules: {},
}
