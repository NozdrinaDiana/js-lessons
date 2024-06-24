import { makeCounter } from "./index.js";

it('should get counter increment 1', () => {
    const result = makeCounter();
    expect(result).toEqual(1);
}); 