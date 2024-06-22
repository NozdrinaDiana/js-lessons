import getSum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it('should get squared numbers', () => {
    const res = getSquaredArray([1, 2, 3, 4]);
    expect(res).toEqual([1, 4, 9, 16]);
});

it('should keep odd numbers only', () => {
    const res = getOddNumbers([1, 2, 3, 4, 5]);
    expect(res).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
    const res = getSum(3, 4);
    expect(res).toEqual(7);
});