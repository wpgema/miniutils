import uppercase from "../src/string/uppercase.js";

test("uppercase should convert string to uppercase", () => {
    expect(uppercase("hello")).toBe("HELLO");
    expect(uppercase("world")).toBe("WORLD");
    expect(uppercase("Hello World")).toBe("HELLO WORLD");
    expect(uppercase("javascript")).toBe("JAVASCRIPT");
});

test("uppercase should handle edge cases", () => {
    expect(uppercase("")).toBe("");
    expect(uppercase("123")).toBe("123");
    expect(uppercase("hello123")).toBe("HELLO123");
    expect(uppercase("ALREADY UPPERCASE")).toBe("ALREADY UPPERCASE");
});

test("uppercase should handle non-string inputs", () => {
    expect(uppercase(null)).toBe("");
    expect(uppercase(undefined)).toBe("");
    expect(uppercase(123)).toBe("");
    expect(uppercase([])).toBe("");
    expect(uppercase({})).toBe("");
});