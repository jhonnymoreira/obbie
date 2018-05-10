import KeyError from './errors/KeyError'

/**
 * Fetches a value from a given key in the object passed.
 *
 * @param {Object} object
 *   The object to fetch the value.
 * @param {string} key
 *   The key to be fetched in the object.
 * @param {*} [defaultValue]
 *   The value to return if key isn't present in the object.
 *
 * @returns {*}
 *   The value fetched from the object or the default value.
 *
 * @example
 *   Obbie.fetch({ a: 1, b: 2 }, 'b')
 *   //=> 2
 *
 * @example
 *   Obbie.fetch({ a: 1, b: 2 }, 'c', 'I love memes')
 *   //=> 'I love memes'
 *
 * @example
 *   // It ignores the default value if key returns a value
 *   Obbie.fetch({ a: 1, b: 2 }, 'b', 'I love memes')
 *   //=> 2
 *
 * @example
 *   Obbie.fetch({ a: 1, b: 2 }, 'c')
 *   //=> throws 'KeyError: key not found: "c"'
 *
 * @example
 *   Obbie.fetch({ a: 1, b: 2 }, 'c', key => `The key is: ${key}`)
 *   //=> "The key is: c"
 *
 * @example
 *   // Returns "null" if default value is a function returning "undefined"
 *   Obbie.fetch({ a: 1, b: 2 }, 'c', () => {})
 *   //=> null
 */
const fetch = (object, key, defaultValue) => {
  const value = object[key]

  if (value === undefined) {
    switch (typeof defaultValue) {
    case 'undefined':
      throw new KeyError(key)
    case 'function':
      return defaultValue(key) || null
    default:
      return defaultValue
    }
  }

  return value
}

export default fetch
