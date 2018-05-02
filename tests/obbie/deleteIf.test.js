import deleteIf from '../../lib/obbie/deleteIf'

const object = {
  a: 1,
  b: 2,
  c: 3
}

describe('deleteIf', () => {
  it('deletes the object entries matching a given expectation', () => {
    const removeEvenEntries = (_, value) => value % 2 === 0

    expect(deleteIf(object, removeEvenEntries)).toMatchObject({
      a: 1,
      c: 3
    })
  })

  it('returns the original object if no expectation is given', () => {
    expect(deleteIf(object)).toMatchObject({
      a: 1,
      b: 2,
      c: 3
    })
  })
})
