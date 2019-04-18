/**
 * Removes entries matching a given expectation.
 *
 * @param {Object} object
 *   The object to remove the entries.
 * @param {Function} [expectation]
 *   The function with the expectation.
 *
 * @returns {Object}
 *  Returns the object without the entries matching the expectation.
 *
 * @example
 *   // Removes even values of the object
 *   Obbie.deleteIf({ a: 1, b: 2,  c: 3 },
 *                  (_, value) => (value % 2) === 0)
 *   //=> { a: 1, c: 3 }
 *
 * @example
 *  Obbie.deleteIf({ a: 1, b: 2, c: 3 })
 * //=> { a: 1, b: 2, c: 3 }
 */
const deleteIf = (object, expectation = (() => {})) => {
  let result = object

  for (let key in object) {
    if (expectation(key, object[key])) {
      const { [key]: _, ...newObject } = object

      result = newObject
    }
  }

  return result
}

export default deleteIf
