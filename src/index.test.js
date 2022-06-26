const assert = require('node:assert');
const throwTimeout = require('./');

// 1. accept a function that returns data, a == b
const fn1 = () => 123;
const r = throwTimeout(fn1);

assert.equal(r, 123);

// 2. throw an error if function doesn't return data
