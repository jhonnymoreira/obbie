import dig from '../../lib/obbie/dig'
import object from '../mocks/object'

describe('dig', () => {
  it('returns the value from a key sequence', () => {
    expect(dig(object, 'a', 'b', 'c')).toEqual(1)
  })

  it('supports Array as key sequence argument', () => {
    expect(dig(object, ['a', 'b', 'c'])).toEqual(1)
  })

  it('supports Array indexes as part of the key sequence', () => {
    expect(dig(object, 'a', 'e', 0, 'f')).toEqual(1)
  })

  it('returns "undefined" if last step of key sequence doesn\'t exist', () => {
    expect(dig(object, 'a', 'b', 'd')).toBeUndefined()
  })

  it('throws if key sequence tail has an undefined step', () => {
    expect(() => dig(object, 'a', 'c', 1)).toThrow()
  })
})
