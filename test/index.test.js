const test = require('ava');
const perc2ratio = require('../index');

test('it must return correct ratio for 80%', (t) => {
  t.deepEqual(perc2ratio(80), [4, 1]);
});

test('it must return correct ratio for 5%', (t) => {
  t.deepEqual(perc2ratio(5), [1, 19]);
});

test('it must return correct ratio for 50%', (t) => {
  t.deepEqual(perc2ratio(50), [1, 1]);
});

test('it must return correct ratio for 1%', (t) => {
  t.deepEqual(perc2ratio(1), [1, 99]);
});

test('it must error when 100', (t) => {
  t.throws(
    () => perc2ratio(100),
    Error,
    'Percentage must be within range 1-99'
  );
});

test('it must error when 0', (t) => {
  t.throws(
    () => perc2ratio(0),
    Error,
    'Percentage must be within range 1-99'
  );
});

test('it must error when percentage is not a whole number', (t) => {
  t.throws(
    () => perc2ratio(99.9),
    Error,
    'Percentage must be a whole number'
  );
});

test('it must error when percentage is not a number', (t) => {
  t.throws(
    () => perc2ratio('50'),
    Error,
    'Percentage must be a number'
  );
});
