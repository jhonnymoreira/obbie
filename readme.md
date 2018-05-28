# Obbie
[![Build Status](https://travis-ci.org/jhonnymoreira/obbie.svg?branch=master)](https://travis-ci.org/jhonnymoreira/obbie)
[![Coverage Status](https://coveralls.io/repos/github/jhonnymoreira/obbie/badge.svg?branch=feat%2Fcoveralls-setup)](https://coveralls.io/github/jhonnymoreira/obbie?branch=feat%2Fcoveralls-setup) [![Greenkeeper badge](https://badges.greenkeeper.io/jhonnymoreira/obbie.svg)](https://greenkeeper.io/)

Obbie aims to make available Ruby's Hash methods to JavaScript as a collection of functions.

**Note:** All functions won't mutate the object passed as argument. Methods such `delete_if`, which mutates the given object in Ruby, won't have mutation here in JavaScript.

## Installation

`npm install obbie`

or

`yarn install obbie`

## Usage

```javascript
import { deleteIf } from 'obbie'

const myObject = { a: 1, b: 2, c: 3 }
const oddValues = deleteIf(
  myObject,
  (_, value) => (value % 2) === 0
) //=> { a: 1, c: 3 }
```

## API

All the available functions and its usage can be found [here](./docs/api.md).

## License

MIT License

Copyright (c) 2017 Jhonny Moreira
