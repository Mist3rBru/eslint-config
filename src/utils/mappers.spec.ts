import {
  extendPluginRules,
  reduceByKey,
  toCamelCase,
  updateGlobalValues,
} from './mappers.js'

describe('mappers', () => {
  describe('reduceByKey', () => {
    it('should reduce an array to a object of the given key', () => {
      const data: Record<'a' | 'b', unknown>[] = [
        {
          a: {
            'import/a': 'error',
          },
          b: {
            'import/b': 'never',
          },
        },
        {
          a: {
            'promise/a': 'warn',
          },
          b: {
            'promise/b': 'never',
          },
        },
      ]
      const expected = {
        'import/a': 'error',
        'promise/a': 'warn',
      }
      const result = reduceByKey(data, 'a')

      expect(result).toStrictEqual(expected)
    })
  })

  describe('extendPluginRules', () => {
    it('should extend named plugin rules', () => {
      const data = {
        rules: {
          'test/a': 'error',
          'test/b': 'warn',
        },
      } as const
      const expected = {
        'test/a': 'error',
        'test/b': 'warn',
      }
      const result = extendPluginRules('test', data)

      expect(result).toStrictEqual(expected)
    })
  })

  it('should extend unnamed plugin rules', () => {
    const data = {
      rules: {
        a: 'error',
        b: 'warn',
      },
    } as const
    const expected = {
      'test/a': 'error',
      'test/b': 'warn',
    }
    const result = extendPluginRules('test', data)

    expect(result).toStrictEqual(expected)
  })

  it('should extend and overwrite plugin rules', () => {
    const data = {
      rules: {
        a: 'error',
        b: 'warn',
      },
    } as const
    const expected = {
      'test/a': 'off',
      'test/b': 'off',
    }
    const result = extendPluginRules('test', data, 'off')

    expect(result).toStrictEqual(expected)
  })

  describe('updateGlobalValues', () => {
    it('should update globals', () => {
      const data = {
        a: true,
        b: false,
      }
      const expected = {
        a: 'readonly',
        b: 'off',
      }
      const result = updateGlobalValues(data)

      expect(result).toStrictEqual(expected)
    })

    it('should overwrite globals', () => {
      const data = {
        a: true,
        b: false,
      }
      const expected = {
        a: 'writable',
        b: 'writable',
      }
      const result = updateGlobalValues(data, 'writable')

      expect(result).toStrictEqual(expected)
    })

    it('should return default globals', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      const result = updateGlobalValues(undefined)

      expect(result).toStrictEqual({})
    })
  })

  describe('toCamelCase', () => {
    it('should format string to camelCase', () => {
      expect(toCamelCase('')).toBe('')
      expect(toCamelCase('PascalCase')).toBe('pascalCase')
      expect(toCamelCase('snake_case')).toBe('snakeCase')
      expect(toCamelCase('kebab-case')).toBe('kebabCase')
    })
  })
})
