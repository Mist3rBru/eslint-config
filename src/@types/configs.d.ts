/* eslint-disable no-duplicate-imports */
/* eslint-disable import/no-default-export */

declare module 'eslint-config-standard-with-typescript' {
  import { type ESLint } from 'eslint'

  declare const config: ESLint.ConfigData

  export default config
}

declare module 'eslint-config-prettier' {
  import { type ESLint } from 'eslint'

  declare const config: ESLint.ConfigData

  export default config
}
