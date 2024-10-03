import type { EslintConfig, EslintPlugin } from '../types.js'
import { defineConfig } from './define-config.js'
import type { DefinePartialEslintConfig } from './define-config.js'

const makeConfig = (
  config?: Partial<DefinePartialEslintConfig>
): EslintConfig => {
  return defineConfig({
    files: [],
    plugins: [],
    rules: {},
    extendPlugins: 'rules',
    ...config,
  })
}

const makePlugin = (plugin?: Partial<EslintPlugin>): EslintPlugin => {
  return {
    name: '',
    source: {},
    settings: {},
    rules: {},
    testRules: {},
    ...plugin,
  }
}

describe('defineConfig()', () => {
  it('should include parserOptions', () => {
    const config = makeConfig({
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    })

    expect(config.languageOptions.parserOptions).toStrictEqual({
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      ecmaFeatures: {
        jsx: true,
      },
    })
  })

  it('should include plugin settings', () => {
    const config = makeConfig({
      plugins: [
        makePlugin({
          name: 'foo',
          settings: { 'foo/a': 'off', 'foo/b': 'warn' },
        }),
        makePlugin({ name: 'bar', settings: { 'bar/c': 'error' } }),
      ],
      settings: {
        'baz/d': 'error',
      },
    })

    expect(config.settings).toStrictEqual({
      'foo/a': 'off',
      'foo/b': 'warn',
      'bar/c': 'error',
      'baz/d': 'error',
    })
  })

  it('should map plugin names', () => {
    const config = makeConfig({
      plugins: [makePlugin({ name: 'foo' }), makePlugin({ name: 'bar' })],
    })

    expect(config.plugins).toHaveProperty('foo')
    expect(config.plugins).toHaveProperty('bar')
  })

  it('should not include empty plugin name', () => {
    const config = makeConfig({
      plugins: [makePlugin({ name: '' })],
    })

    expect(config.plugins).not.toContain('')
  })

  it('should include plugin rules', () => {
    const config = makeConfig({
      plugins: [
        makePlugin({ name: 'foo', rules: { 'foo/a': 'off', 'foo/b': 'warn' } }),
        makePlugin({ name: 'bar', rules: { 'bar/c': 'error' } }),
      ],
      rules: {
        'baz/d': 'error',
      },
    })

    expect(config.rules).toStrictEqual({
      'foo/a': 'off',
      'foo/b': 'warn',
      'bar/c': 'error',
      'baz/d': 'error',
    })
  })

  it('should include plugin test rules', () => {
    const config = makeConfig({
      plugins: [
        makePlugin({
          name: 'foo',
          testRules: { 'foo/a': 'off', 'foo/b': 'warn' },
        }),
        makePlugin({ name: 'bar', testRules: { 'bar/c': 'error' } }),
        makePlugin({ name: 'baz', rules: { 'baz/c': 'error' } }),
      ],
      extendPlugins: 'testRules',
      rules: {
        'zoo/e': 'error',
      },
    })

    expect(config.rules).toStrictEqual({
      'foo/a': 'off',
      'foo/b': 'warn',
      'bar/c': 'error',
      'zoo/e': 'error',
    })
  })
})
