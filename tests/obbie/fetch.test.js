import fetch from '../../lib/obbie/fetch'
import KeyError from '../../lib/obbie/errors/KeyError'

describe('fetch', () => {
  const myObject = {
    a: 1,
    b: 2
  }

  describe('when "key" is present in the object', () => {
    it('returns the value from the key', () => {
      expect(fetch(myObject, 'b')).toEqual(2)
    })

    it('ignores the "default value"', () => {
      expect(fetch(myObject, 'b', 'I love memes')).toEqual(2)
    })
  })

  describe('when "key" isn\'t present in the object', () => {
    it('returns the "default value"', () => {
      expect(fetch(myObject, 'c', 'I love memes')).toEqual('I love memes')
    })

    it('throws if no "default value" is passed', () => {
      expect(() => fetch(myObject, 'c')).toThrowError(new KeyError('c'))
    })

    it('applies a function as "default value" accepting "key" as argument', () => {
      expect(fetch(myObject, 'c', key => `The key is: ${key}`)).toEqual('The key is: c')
    })

    it('returns "null" if "default value" is a function returning "undefined"', () => {
      expect(fetch(myObject, 'c', () => {})).toEqual(null)
    })
  })
})
