import { importPlugin } from '../plugins/import.js'
import { javascriptPlugin } from '../plugins/javascript.js'
import { noSecretsPlugin } from '../plugins/no-secrets.js'
import { promisePlugin } from '../plugins/promise.js'
import { stylisticPlugin } from '../plugins/stylistic.js'
import { typescriptPlugin } from '../plugins/typescript.js'
import { unicornPlugin } from '../plugins/unicorn.js'

export const sharedPlugins = [
  javascriptPlugin,
  typescriptPlugin,
  stylisticPlugin,
  importPlugin,
  promisePlugin,
  unicornPlugin,
  noSecretsPlugin,
]
