import fetchValues from '../../lib/obbie/fetchValues'
import KeyError from '../../lib/obbie/errors/KeyError'

describe('fetchValues', () => {
  const object = {
    a: 1,
    b: 2
  }

  describe('when all keys are present in the object', () => {
    it('returns an array with all the values of the keys', () => {
      expect(fetchValues(object, ['a', 'b'])).toEqual([1, 2])
    })

    it('ignores the "default value"', () => {
      expect(fetchValues(object, ['a', 'b'], true)).toEqual([1, 2])
    })
  })

  describe('when one of the keys isn\'t present in the object', () => {
    it('returns the "default value"', () => {
      expect(fetchValues(object, ['a', 'b', 'c'], true)).toEqual([1, 2, true])
    })

    it('accepts a function as "default value"', () => {
      expect(fetchValues(object, ['a', 'b', 'c'], key => `Missing key is: ${key}`))
        .toEqual([1, 2, 'Missing key is: c'])
    })

    it('throws if "default value" is undefined', () => {
      expect(() => fetchValues(object, ['a', 'b', 'c'])).toThrowError(new KeyError('c'))
    })

    it('returns "null" if "default value" is a function returning "undefined"', () => {
      expect(fetchValues(object, ['a', 'b', 'c'], () => {})).toEqual([1, 2, null])
    })
  })
})
