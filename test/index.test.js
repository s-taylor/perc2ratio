const test = require('ava');
const toRatio = require('../index');

test('it must return correct ratio for 80%', (t) => {
  t.deepEqual(toRatio(80), [4, 1]);
});

test('it must return correct ratio for 5%', (t) => {
  t.deepEqual(toRatio(5), [1, 19]);
});

test('it must return correct ratio for 50%', (t) => {
  t.deepEqual(toRatio(50), [1, 1]);
});
