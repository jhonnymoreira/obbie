import KeyError from '../../../lib/obbie/errors/KeyError'

describe('KeyError', () => {
  const keyError = new KeyError('a')

  it('is an instance of "Error"', () => {
    expect(keyError).toBeInstanceOf(Error)
  })

  it('accepts a "key" property as argument', () => {
    expect(keyError).toHaveProperty('key', 'a')
  })

  it('has a "message" property', () => {
    expect(keyError).toHaveProperty('message', 'key not found: "a"')
  })

  it('has a "name" property', () => {
    expect(keyError).toHaveProperty('name', 'KeyError')
  })
})
