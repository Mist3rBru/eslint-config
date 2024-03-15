import { jestConfig, nodeConfig } from './configs/index.js'
import { config } from './factory.js'
import type { Linter } from 'eslint'

describe('factory', () => {
  it('should create a list with all configs', async () => {
    const result = await config('node', 'jest')
    const expected = await Promise.all([nodeConfig(), jestConfig()])

    expect(result).toStrictEqual(expected)
  })

  it('should create a overwrite config', async () => {
    const overwrite: Linter.FlatConfig = {
      files: ['**/*.ts'],
      rules: {},
    }
    const result = await config('node', overwrite)

    expect(result.at(-1)).toStrictEqual(overwrite)
  })
})
