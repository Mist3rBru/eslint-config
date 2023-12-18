import shared from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript'],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    ...shared,
  },
}
