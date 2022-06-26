const assert = require('node:assert');
const throwTimeout = require('.');

(async () => {
  // 1. accept a function that returns data
  const fn1 = () => 123;
  const r1 = await throwTimeout(fn1);

  assert.equal(r1, 123);

  // 2. pass with async function
  const fn2 = async () => new Promise((res) => {
    setTimeout(() => {
      res('always');
    }, 1);
  });

  assert.equal(await throwTimeout(fn2), 'always');

  // 3. throw an error if function doesn't return data
  const fn3 = () => new Promise((res) => {
    setTimeout(() => {
      res('never');
    }, 2_000);
  });

  await throwTimeout(fn3, () => {
    console.log('mata o objeto po');
  });
})();
