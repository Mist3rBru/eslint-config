import { name as packageName, version as packageVersion } from '../package.json'
import { jestDomConfig } from './configs/jest-dom.js'
import { jestConfig } from './configs/jest.js'
import { nextConfig } from './configs/next.js'
import { nodeConfig } from './configs/node.js'
import { reactConfig } from './configs/react.js'
import { vitestConfig } from './configs/vitest.js'
import type { EslintConfig, EslintLegacyConfig } from './types.js'

function convertToLegacyConfig<TPluginName extends string>(
  config: EslintConfig<TPluginName>
): EslintLegacyConfig<TPluginName> {
  return {
    files: config.files,
    parser: '@typescript-eslint/parser',
    parserOptions: config.languageOptions.parserOptions,
    env: {
      es2022: true,
    },
    settings: config.settings,
    globals: config.languageOptions.globals,
    plugins: Object.keys(config.plugins) as TPluginName[],
    rules: config.rules,
  }
}

const configs = {
  jest: jestConfig,
  react: reactConfig,
  next: nextConfig,
  node: nodeConfig,
  vitest: vitestConfig,
  'jest-dom': jestDomConfig,
}

type Configs = typeof configs

type LegacyConfigs = {
  [K in keyof Configs as `${K}-legacy`]: EslintLegacyConfig<
    // @ts-expect-error It works, but ts server can't handle how deep this goes
    keyof Configs[K]['plugins']
  >
}

function createLegacyConfigs(): LegacyConfigs {
  return Object.fromEntries(
    Object.entries(configs).map(([name, config]) => [
      `${name}-legacy`,
      // @ts-expect-error It works, but ts server can't handle how deep this goes
      convertToLegacyConfig(config),
    ])
  ) as LegacyConfigs
}

export = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {
    ...configs,
    ...createLegacyConfigs(),
  },
}
