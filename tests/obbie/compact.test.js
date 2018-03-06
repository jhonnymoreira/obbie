import compact from '../../lib/obbie/compact'
import object from '../mocks/object'

describe('compact', () => {
  it('removes "null" values on given object', () => {
    expect(compact(object)).toMatchObject({
      a: {
        b: {
          c: 1
        },
        e: [
          { f: 1 }
        ]
      }
    })
  })
})
