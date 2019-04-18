import deleteIf from '../../lib/obbie/deleteIf'

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 1
  }
}

describe('deleteIf', () => {
  it('deletes the object entries matching a given expectation', () => {
    const removeEvenEntries = (_, value) => value % 2 === 0

    expect(deleteIf(object, removeEvenEntries)).not.toHaveProperty('b')
  })

  it('deletes deep entries matching a given expectation', () => {
    const removeDeepEntry = (_, value) => value && value.e === 1

    expect(deleteIf(object, removeDeepEntry)).not.toHaveProperty('d')
  })

  it('returns the original object if no expectation is given', () => {
    expect(deleteIf(object)).toMatchObject(object)
  })
})
