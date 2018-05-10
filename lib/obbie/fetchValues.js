import fetch from './fetch'

/**
 * Returns the values of the keys in the object using `Obbie.fetch`.
 *
 * @param {Object} object
 *   The object to fetch the values.
 * @param {Array<string|number>} keys
 *   The array of keys to be fetched.
 * @param {*} [defaultValue]
 *   The value to be used if key isn't found.
 *
 * @returns {any[]}
 *   The array with the values from each key.
 *
 * @see {@link https://git.io/vpiD9}
 *
 * @example
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b'])
 *   //=> [1, 2]
 *
 * @example
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], 'I love memes')
 *   //=> [1, 2, 'I love memes']
 *
 * @example
 *   // It ignores the default value if key returns a value
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b'], 'I love memes')
 *   //=> [1, 2]
 *
 * @example
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'])
 *   //=> throws 'KeyError: key not found: "c"'
 *
 * @example
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], key => `The key is: ${key}`)
 *   //=> [1, 2, 'The key is: c']
 *
 * @example
 *   // Returns "null" if default value is a function returning "undefined"
 *   Obbie.fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], () => {})
 *   //=> [1, 2, null]
 */
const fetchValues = (object, keys, defaultValue) =>
  keys.map(key => fetch(object, key, defaultValue))

export default fetchValues
