import repeatString from "../src/string/repeatString.js";

test("repeatString should repeat string correctly", () => {
    expect(repeatString("hello", 3)).toBe("hellohellohello");
    expect(repeatString("ab", 4)).toBe("abababab");
    expect(repeatString("x", 5)).toBe("xxxxx");
});

test("repeatString should handle zero and one repeats", () => {
    expect(repeatString("test", 0)).toBe("");
    expect(repeatString("hello", 1)).toBe("hello");
});

test("repeatString should handle negative numbers", () => {
    expect(repeatString("test", -1)).toBe("");
    expect(repeatString("hello", -5)).toBe("");
});

test("repeatString should handle edge cases", () => {
    expect(repeatString("", 5)).toBe("");
    expect(repeatString("test", 0)).toBe("");
});

test("repeatString should handle non-string/non-number inputs", () => {
    expect(repeatString(null, 3)).toBe("");
    expect(repeatString("hello", "3")).toBe("");
    expect(repeatString(123, 2)).toBe("");
});