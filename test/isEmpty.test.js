const isEmpty = require("../src/isEmpty");

test("isEmpty should detect empty values", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty("hello")).toBe(false);
});
