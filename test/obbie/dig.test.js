import dig from '../../lib/obbie/dig'
import object from '../mocks/filledObject'

describe('dig', () => {
  it('returns the value from a path', () => {
    expect(dig(object, 'a', 'b', 'c')).toEqual(1)
  })

  it('supports Array as path argument', () => {
    expect(dig(object, ['a', 'b', 'c'])).toEqual(1)
  })

  it('returns "undefined" if last step doesn\'t exist', () => {
    expect(dig(object, 'a', 'b', 'd')).toBeUndefined()
  })

  it('throws if path tail has an undefined step', () => {
    expect(() => dig(object, 'a', 'c', 1)).toThrow()
  })
})
