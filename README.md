# perc2ratio
a small module to convert percentages to ratios

## How to use it?

```
const perc2ratio = require('perc2ratio');

perc2ratio(80); // returns [4, 1]
perc2ratio(10); // returns [1, 9]
perc2ratio(50); // returns [1, 1]
```

## Args

perc2ratio singular argument must be...

- a number (not a string!)
- in the range 1 - 99 (It will throw an error on any number outside this range, note 0 and 100 cannot produce valid ratios!)
- a whole number (This could possibly be supported with some changes, but it is not supported for now.
