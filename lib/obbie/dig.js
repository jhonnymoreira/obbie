const dig = (object, ...keySequence) => {
  const normalizedKeySequence = keySequence.length === 1 && Array.isArray(keySequence[0])
    ? [...keySequence[0]]
    : keySequence

  return normalizedKeySequence.reduce((currentStep, nextStep) => currentStep[nextStep], object)
}

export default dig
