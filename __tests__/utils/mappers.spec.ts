import { mapRules, reduceByKey } from '#/utils/mappers.js'

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

  describe('mapRules', () => {
    it('should reduce an array of rules to a object of rule:option', () => {
      const data: string[] = ['import/a', 'import/b', 'import/c']
      const expected = {
        'import/a': 'error',
        'import/b': 'error',
        'import/c': 'error',
      }
      const result = mapRules(data, 'error')

      expect(result).toStrictEqual(expected)
    })
  })
})
