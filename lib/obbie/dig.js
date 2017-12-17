const dig = (object, ...keysPath) => {
  const normalizedkeysPath = keysPath.length === 1 && Array.isArray(keysPath[0])
    ? [...keysPath[0]]
    : keysPath

  return normalizedkeysPath.reduce((currentStep, nextStep) => currentStep[nextStep], object)
}

export default dig
