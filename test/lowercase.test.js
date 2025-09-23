import lowercase from "../src/lowercase.js";

test("lowercase should convert string to lowercase", () => {
    expect(lowercase("HELLO")).toBe("hello");
    expect(lowercase("WORLD")).toBe("world");
    expect(lowercase("Hello World")).toBe("hello world");
    expect(lowercase("JAVASCRIPT")).toBe("javascript");
});

test("lowercase should handle edge cases", () => {
    expect(lowercase("")).toBe("");
    expect(lowercase("123")).toBe("123");
    expect(lowercase("HELLO123")).toBe("hello123");
    expect(lowercase("already lowercase")).toBe("already lowercase");
});

test("lowercase should handle non-string inputs", () => {
    expect(lowercase(null)).toBe("");
    expect(lowercase(undefined)).toBe("");
    expect(lowercase(123)).toBe("");
    expect(lowercase([])).toBe("");
    expect(lowercase({})).toBe("");
});