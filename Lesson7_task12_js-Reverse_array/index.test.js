import { reverseArray } from './index.js';

it('should get array of numbers', () => {
    const res = reverseArray(22);
    expect(res).toEqual(null);
}); 

it('should get array of numbers', () => {
    const res = reverseArray([1, 2, 3]);
    expect(res).toEqual([3, 2, 1]);
}); 

it('should get array of numbers', () => {
    const res = reverseArray([22, 0, 11]);
    expect(res).toEqual([11, 0, 22]);
}); 