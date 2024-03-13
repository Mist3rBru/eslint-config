/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-default-export */

declare module 'eslint-config-prettier' {
  import type { ESLint, Linter } from 'eslint'

  declare const config: ESLint.ConfigData & { rules: Linter.RulesRecord }

  export default config
}
