import { type EslintConfig } from '../types.js'
import { shared } from '../utils/shared.js'
import { mapRules } from '../utils/mappers.js'

export const jestDomRules = [
  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
  'jest-dom/prefer-checked',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
  'jest-dom/prefer-empty',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
  'jest-dom/prefer-enabled-disabled',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
  'jest-dom/prefer-focus',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
  'jest-dom/prefer-in-document',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
  'jest-dom/prefer-required',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
  'jest-dom/prefer-to-have-attribute',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
  'jest-dom/prefer-to-have-class',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
  'jest-dom/prefer-to-have-style',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
  'jest-dom/prefer-to-have-text-content',

  // https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
  'jest-dom/prefer-to-have-value',
] satisfies `jest-dom/${string}`[]

export const jestDomConfig: EslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2022: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  plugins: [
    // https://github.com/testing-library/eslint-plugin-jest-dom?tab=readme-ov-file#readme
    'jest-dom',
  ],
  extends: [],
  rules: {
    ...shared.testRules,
    ...mapRules(jestDomRules, 'error'),
  },
}
