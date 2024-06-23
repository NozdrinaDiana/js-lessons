import getMinSquaredNumber from "./getMinSquaredNumber.js";

it('should get square of abs minimum number', () => {
    const res1 = [];
    expect(res1).toEqual(null);
    const res2 = ['dhdhkdhk'];
    expect(res2).toEqual(null);
    const res3 = [-777, 3, -2, 6, 45, -20];
    expect(res3).toEqual(4);
});