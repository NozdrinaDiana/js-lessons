import { calc } from "./calculator.js";

it('should get sum of numbers', () => {
    const result = calc('3 + 4');
    expect(result).toEqual(7);
});

it('should get difference of numbers', () => {
    const result = calc('3 - 4');
    expect(result).toEqual(-1);
});

it('should get multiplication of numbers', () => {
    const result = calc('3 * 4');
    expect(result).toEqual(12);
});

it('should get division of numbers', () => {
    const result = calc('4 / 4');
    expect(result).toEqual(1);
});

it('should get not a string', () => {
    const result = calc(3);
    expect(result).toEqual(null);
});