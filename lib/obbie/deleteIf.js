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
  let copy = Object.assign({}, object)

  for (let key in copy) {
    if (expectation(copy[key])) {
      delete copy[key]
    }
  }

  return copy
}

export default deleteIf
