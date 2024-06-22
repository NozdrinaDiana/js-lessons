const getFiniteNumbers = arr => arr.filter(i => Number.isFinite(i));

const getFiniteNumbersV2 = arr => arr.filter(i => isFinite(i));

const getNaN = arr => arr.filter(i => Number.isNaN(i));

const getNaNV2 = arr => arr.filter(i => isNaN(i));

const getIntegers = arr => arr.filter(i => Number.isInteger(i));

console.log(getFiniteNumbers([1, 1.1, -14, -14.1, NaN, 'k', 1 / 3]));
console.log(getFiniteNumbersV2([1, 1.1, -14, -14.1, NaN, 'k', 1 / 3]));
console.log(getNaN([1, 1.1, -14, -14.1, NaN, 's', 10 / 's']));
console.log(getNaNV2([1, 1.1, -14, -14.1, NaN, 's', 10 / 's']));
console.log(getIntegers([1, 1.1, -14, -14.1, NaN, 'k', 1 / 3]));