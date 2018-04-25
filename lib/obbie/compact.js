/**
 * Removes "null" values from the first layer of a given object.
 *
 * @function compact
 * @memberof Obbie
 *
 * @param {Object} object
 *   The object to be compacted.
 * @returns {Object}
 *   The object without first layer "null" values.
 *
 * @example
 *   Obbie.compact({ a: null, b: { c: null } })
 *   //=> { b: { c: null } }
 */
const compact = object => Object.entries(object)
  .reduce((newObject, [key, value]) => {
    if (value !== null && value !== undefined) {
      newObject[key] = value
    }

    return newObject
  }, {})

export default compact
