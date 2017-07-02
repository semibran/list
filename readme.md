# list
> Lightweight and context-free array operations

## usage
[![NPM](https://nodei.co/npm/list.png?mini)](https://www.npmjs.com/package/list)
```js
// ES6:
const { append, insert, remove, locate } = require('list')
```
```js
// ES5:
var append = require('list/append')
```

### `append(list, item)`
Adds `item` to the end of `list` and returns `list`.
```js
> append(['foo', 'bar'], 'baz')
['foo', 'bar', 'baz']
```

### `insert(list, index, item)`
Inserts `item` at `index` in `list`. The item in `list` located at `index` and all subsequent items are shifted by one index to accommodate `item`.
```js
> insert(['foo', 'baz'], 1, 'bar')
['foo', 'bar', 'baz']
```
To prepend to a list, insert at index `0`.
```js
> insert(['bar', 'baz'], 0, 'foo')
['foo', 'bar', 'baz']
```
`list` is not modified if `index` is less than `0` or greater than or equal to `list.length`. Therefore, `insert` cannot be used to add items to the end of a list - use `append` instead.

### `remove(list, index)`
Removes the item located at `index` from `list`. Returns the item if it exists, otherwise `undefined`.
```js
> remove(['foo', 'bar', 'baz'], 1)
'bar'
```
```js
> remove(['foo', 'bar', 'baz'], 'qux')
undefined
```

### `locate(list, item)`
Finds the first index where `list[index] === item`, or `undefined` if no item is found.
```js
> locate(['foo', 'bar', 'baz'], 'baz')
2
```
```js
> locate(['foo', 'bar', 'baz'], 'qux')
undefined
```

## see also
- [`semibran/map`](https://github.com/semibran/map) - simple key-value maps

## kudos
- [leo](https://github.com/leo) - for donating the package name

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
