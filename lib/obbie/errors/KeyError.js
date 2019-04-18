class KeyError extends Error {
  constructor(key) {
    super()

    this.name = 'KeyError'
    this.key = key
    this.message = `key not found: "${this.key}"`
  }
}

export default KeyError
