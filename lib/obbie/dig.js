/**
 * Returns the value of a key sequence searched in a given object.
 *
 * @function dig
 * @memberof Obbie
 *
 * @param {Object} object
 *   The object to execute the search.
 * @param {string|number|Array} keySequence
 *   The key sequence to be searched in the object.
 * @returns {*}
 *   The value of the key sequence searched in the object.
 *
 * @example
 *   Obbie.dig({ a: [{ b: 1 }] }, 'a', 0, 'b')
 *   //=> 1
 */
const dig = (object, ...keySequence) => {
  const normalizedKeySequence = keySequence.length === 1 && Array.isArray(keySequence[0])
    ? [...keySequence[0]]
    : keySequence

  return normalizedKeySequence.reduce((currentStep, nextStep) => currentStep[nextStep], object)
}

export default dig
