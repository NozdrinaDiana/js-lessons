it('17 always = 17', () => {
    expect(17).toEqual(17);
});

it('17 !== 18', () => {
    expect(17).not.toEqual(18);
});

const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);
console.log(getEvenNumbers([1, 2, 22, 3, 5, 26]));

it('should get only even numbers from array', () => {
    const res = getEvenNumbers([1, 2, 3, 4]);
    expect(res).toEqual([2, 4]);
});