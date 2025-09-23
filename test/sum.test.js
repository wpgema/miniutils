import sum from "../src/sum.js";

test("sum should add all numbers in array", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, 1, 5])).toBe(5);
    expect(sum([])).toBe(0);
    expect(sum("not an array")).toBe(0);
});
