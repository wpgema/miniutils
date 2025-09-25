import isEmptyArray from "../src/general/isEmptyArray.js";

test("isEmpty should detect empty values", () => {
    expect(isEmptyArray([])).toBe(true);
    expect(isEmptyArray("")).toBe(true);
    expect(isEmptyArray({})).toBe(true);
    expect(isEmptyArray([1, 2, 3])).toBe(false);
    expect(isEmptyArray("hello")).toBe(false);
});
