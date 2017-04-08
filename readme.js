# `Object.select`
> Helper method to pick object properties into a new object.

## Usage

```js
import select from 'object-select';
const ref = select(user, 'id', 'name');
```

If you wish to have this as a static function on `Object` (hypothetical polyfill):

```js
require('object-select/polyfill');
const ref = Object.select(user, 'id', 'name');
```

## License

Developed and maintained by [Mo Valipour](https://github.com/mvalipour).

See license info [here](https://github.com/mvalipour/object-select/blob/master/license.txt).
