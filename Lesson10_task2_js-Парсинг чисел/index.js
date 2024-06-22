const getParsedIntegers = arr => arr.map(i => Number.parseInt(i));

const getParsedIntegersV2 = arr => arr.map(i => parseInt(i));

const getParsedFloats = arr => arr.map(i => Number.parseFloat(i));

const getParsedFloatsV2 = arr => arr.map(i => parseFloat(i));
    
console.log(getParsedIntegers([1, 1.1, 1.33333, -1.1, 1 / 3, 's']));
console.log(getParsedIntegersV2([1, 1.1, 1.33333, -1.1, 1 / 3, 's']));
console.log(getParsedFloats([1, 1.1, 1.33333, -1.1, 1 / 3, 's']));
console.log(getParsedFloatsV2([1, 1.1, 1.33333, -1.1, 1 / 3, 's']));