# Obbie

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

### `compact(object: object) => object`

Removes "null" values from the first layer of a given object.

```javascript
import { compact } from 'obbie'

compact({ a: null, b: undefined, c: 3 })
//=> { c: 3 }

// It won't go deep inside the given object.
compact({ a: { b: null } })
//=> { a: { b: null } }
```

### `deleteIf(object: object, expectation: ?Function = (() => {})) => object`

Removes entries matching a given expectation.

```javascript
import { deleteIf } from 'obbie'

const myObject = {
  a: 1,
  b: 2,
  c: 3
}

deleteIf(myObject,
         (key, value) => (value % 2) === 0)
//=> { a: 1, b: 2 }

deleteIf(myObject)
//=> { a: 1, b: 2, c: 3 }
```

### `dig(object: object, ...keySequence: number|string|Array<number|string>) => any`

Returns the value of a key sequence searched in a given object.

```javascript
import { dig } from 'obbie'

const myObject = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

dig(myObject, 'a', 'b', 'c', 1)
//=> 2

dig(myObject, ['a', 'b', 'c', 1])
//=> 2
```

### `fetch(object: object, key: string, defaultValue: any) => any`

Fetches a value from a given key in the object passed.

```javascript
import { fetch } from 'obbie'

const myObject = {
  a: 1,
  b: 2
}

fetch(myObject, 'b')
//=> 2

fetch(myObject, 'c', 'I love memes')
//=> 'I love memes'

// It ignores the default value if key returns a value
fetch(myObject, 'b', 'I love memes')
//=> 2

fetch(myObject, 'c')
//=> throws 'KeyError: key not found: "c"'

fetch(myObject, 'c', key => `The key is: ${key}`)
//=> "The key is: c"

// Returns "null" if default value is a function returning "undefined"
fetch(myObject, 'c', () => {})
//=> null
```

### `fetchValues(object: object, keys: string[], defaultValue?: any) => any[]`

Returns the value of the keys in the object using [`Obbie.fetch`](https://git.io/vpiD9).

```javascript
import { fetchValues } from 'obbie'

fetchValues({ a: 1, b: 2 }, ['a', 'b'])
//=> [1, 2]

fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], 'I love memes')
//=> [1, 2, 'I love memes']

// It ignores the default value if key returns a value
fetchValues({ a: 1, b: 2 }, ['a', 'b'], 'I love memes')
//=> [1, 2]

fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'])
//=> throws 'KeyError: key not found: "c"'

fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], key => `The key is: ${key}`)
//=> [1, 2, 'The key is: c']

// Returns "null" if default value is a function returning "undefined"
fetchValues({ a: 1, b: 2 }, ['a', 'b', 'c'], () => {})
//=> [1, 2, null]
```

### `length(object: object) => number`

Returns the amount of entries in a given object.

```javascript
import { length } from 'obbie'

length({ a: 1, b: undefined, c: 3, d: null })
//=> 4

length({ a: 1, b: 2 })
//=> 2
```

## License

MIT License

Copyright (c) 2017 Jhonny Moreira
