import compact from '../../lib/obbie/compact'

const object = {
  a: 1,
  b: 2,
  c: null
}

describe('compact', () => {
  it('removes "null" values on given object', () => {
    expect(compact(object)).toMatchObject({
      a: 1,
      b: 2
    })
  })
})
