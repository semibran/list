# maze
> Fast and functional array operations

## install
```sh
npm install semibran/array
```

## usage
```javascript
const { append, prepend, insert, remove, splice... } = require('array')
```
Destructuring is recommended unless shadowing the `Array` constructor within the current scope is considered permissible.

### `append`
Adds `value` to the end of `array`.
```javascript
var array = ['foo', 'bar']
append(array, 'baz')
```

### `prepend`
Adds `value` to the beginning of `array`.
```javascript
var array = ['foo', 'bar']
prepend(array, 'kek') // -> ['kek', 'foo', 'bar']
```
Shorthand for `insert(array, value, 0)`.

### `insert`
Adds `value` to `array` at `index`.
```javascript
var odds = [1, 3, 5]
var primes = clone(odds)
insert(2, 1, primes)
```

### `remove`
Removes the first instance of `value` from `array`.
```javascript
var naturals = [1, 2, 3, 4, 5]
var primes = clone(odds)
remove(4, array)
```
Essentially shorthand to `splice(locate(value), array)`.

### `splice`
Removes the item in `array` at `index`.

### `locate`
Finds the `index` of `value` in `array`, or `-1` if not found.

### `contains`
Determines if `value` is inside `array`.

Shorthand for `locate(value, array) === -1`.

### `slice`
Creates a copy of `array` with the items located from `begin` to `end`.

### `clone`
Creates a copy of `array`.

Shorthand for `slice(0, array.length)`.

### `map`
Creates a copy of `array`, applying `callback` to each item.

### `filter`
Creates a copy of `array` including only the elements upon which `callback` returns `true`.

### `find`
Returns the first item in `array` upon which `callback` returns `true`, otherwise `undefined`.

Faster variant of `filter(array, callback)[0]`, since it returns on the first result.

## license
MIT
