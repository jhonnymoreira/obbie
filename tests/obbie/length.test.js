import length from '../../lib/obbie/length'

describe('length', () => {
  it('returns the amount of keys of a given object', () => {
    const object = { a: 1, b: 2, c: undefined }

    expect(length(object)).toEqual(3)
  })
})
