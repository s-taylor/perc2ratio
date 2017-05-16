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

test('it must return correct ratio for 1%', (t) => {
  t.deepEqual(toRatio(1), [1, 99]);
});

test('it must error when 100', (t) => {
  t.throws(
    () => toRatio(100),
    Error,
    'Percentage must be within range 1-99'
  );
});

test('it must error when 0', (t) => {
  t.throws(
    () => toRatio(0),
    Error,
    'Percentage must be within range 1-99'
  );
});

//test('it must error when percentage is not a number', (t) => {
  //t.deepEqual(toRatio('50%'), [1, 99]);
//});
