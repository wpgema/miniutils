# Utilify

A tiny JavaScript utility library for helper functions ✨

## Installation
```bash
npm install utilify
```

## Usage

### String Helpers

#### `capitalize(str)`
Capitalizes the first letter of a string.
```javascript
import { capitalize } from 'utilify';

capitalize('hello'); // "Hello"
capitalize('WORLD'); // "WORLD"
```

#### `lowercase(str)`
Converts a string to lowercase.
```javascript
import { lowercase } from 'utilify';

lowercase('HELLO'); // "hello"
```

#### `uppercase(str)`
Converts a string to uppercase.
```javascript
import { uppercase } from 'utilify';

uppercase('hello'); // "HELLO"
```

#### `slug(str)`
Converts a string to URL-friendly slug format.
```javascript
import { slug } from 'utilify';

slug('JavaScript is Awesome'); // "javascript-is-awesome"
```

#### `truncate(str, length)`
Truncates a string to a specified length.
```javascript
import { truncate } from 'utilify';

truncate('This is a long sentence', 10); // "This is a..."
```

### Array Helpers

#### `sum(arr)`
Calculates the sum of all numbers in an array.
```javascript
import { sum } from 'utilify';

sum([1, 2, 3, 4, 5]); // 15
```

#### `unique(arr)`
Returns an array with unique values only.
```javascript
import { unique } from 'utilify';

unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

### General Helpers

#### `isEmpty(value)`
Checks if a value is empty (arrays, objects, strings, etc.).
```javascript
import { isEmpty } from 'utilify';

isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty('hello'); // false
isEmpty([1, 2, 3]); // false
```

#### `deepClone(obj)`
Creates a deep copy of an object or array, handling nested structures and circular references.
```javascript
import { deepClone } from 'utilify';

const original = {
  name: 'John',
  address: { city: 'Jakarta', country: 'Indonesia' },
  hobbies: ['reading', 'coding']
};

const cloned = deepClone(original);
// Modifying the original won't affect the cloned object
original.name = 'Jane';
original.address.city = 'Bandung';

console.log(cloned.name); // "John"
console.log(cloned.address.city); // "Jakarta"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**M. Gema Maulana, S. Kom**

- GitHub: [@wpgema](https://github.com/wpgema)
- Repository: [utilify](https://github.com/wpgema/utilify)
