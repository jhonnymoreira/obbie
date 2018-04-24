/**
 * Returns the amount of keys in a given object.
 *
 * @function length
 * @memberof Obbie
 *
 * @param {Object} object
 *   The object to have keys counted
 * @returns {Number}
 *   The amount of keys counted in the object
 *
 * @example
 *   Obbie.length({ a: 1, b: 2, c: undefined })
 *   //=> 3
 */
const length = object => Object.keys(object).length

export default length