import compact from '../../lib/obbie/compact'

const object = {
  a: 1,
  b: 2
}

describe('compact', () => {
  it('removes "null" values on given object', () => {
    const objectWithNullProperty = Object.assign({}, object, { c: null })

    expect(compact(objectWithNullProperty)).toMatchObject(object)
  })

  it('removes "undefined" values on given object', () => {
    const objectWithUndefinedProperty = Object.assign({}, object, { c: undefined })

    expect(compact(objectWithUndefinedProperty)).toMatchObject(object)
  })
})
