const select = require('./');

if(!!Object.select) {
  throw 'Object.select is already assigned!';
}

Object.select = select;
