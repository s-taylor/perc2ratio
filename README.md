# perc2ratio

a small module to convert percentages to ratios

## What it does?

Pass a percentage (as a number) to the module, and get back a ratio (as an array).
The module will calculate the smallest possible ratio while maintaining both sides as **whole** numbers.

## How to use it?

First `npm install --save perc2ratio` OR `yarn add perc2ratio`

```js
const perc2ratio = require('perc2ratio');

perc2ratio(80); // returns [4, 1]
perc2ratio(10); // returns [1, 9]
perc2ratio(50); // returns [1, 1]
```

## Args

perc2ratio's singular argument must be...

- a number (not a string!)
- in the range 1 - 99 (It will throw an error on any number outside this range, note 0 and 100 cannot produce valid ratios!)
- a whole number (This could possibly be supported with some changes, but it is not supported for now.
