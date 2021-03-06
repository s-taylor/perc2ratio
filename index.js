const isWhole = num => num % 1 === 0;

const perc2ratio = (perc) => {
  if (typeof perc !== 'number') throw new Error('Percentage must be a number');
  if (!isWhole(perc)) throw new Error('Percentage must be whole number');
  if (perc <= 0 || perc >= 100) throw new Error('Percentage must be within range 1-99');

  const x = perc;
  const y = 100 - perc;

  let result = [x, y];
  let exit = false;
  let i = 2;
  while (!exit) {
    const a = x / i;
    const b = y / i;
    if (isWhole(a) && isWhole(b)) result = [a, b];

    i += 1;
    // give up when either a or b is less than 1
    if (a < 1 || b < 1) exit = true;
  }

  return result;
};

module.exports = perc2ratio;
