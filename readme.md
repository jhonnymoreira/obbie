# Obbie

Obbie aims to make available Ruby's Hash methods to JavaScript as a collection of functions.

**Note:** All functions are immutable. Methods such as `delete_if`, `clear` and a few others which mutates the original object, are all treated to be immutable!

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

## License

MIT License

Copyright (c) 2017 Jhonny Moreira