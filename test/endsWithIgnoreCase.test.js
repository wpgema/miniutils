import endsWithIgnoreCase from "../src/string/endsWithIgnoreCase.js";

test("endsWithIgnoreCase should check endings case insensitive", () => {
    expect(endsWithIgnoreCase("Hello World", "world")).toBe(true);
    expect(endsWithIgnoreCase("Hello World", "WORLD")).toBe(true);
    expect(endsWithIgnoreCase("JavaScript", "script")).toBe(true);
    expect(endsWithIgnoreCase("JavaScript", "SCRIPT")).toBe(true);
});

test("endsWithIgnoreCase should return false for non-matches", () => {
    expect(endsWithIgnoreCase("Hello World", "hello")).toBe(false);
    expect(endsWithIgnoreCase("JavaScript", "java")).toBe(false);
    expect(endsWithIgnoreCase("test", "testing")).toBe(false);
});

test("endsWithIgnoreCase should handle edge cases", () => {
    expect(endsWithIgnoreCase("", "")).toBe(true);
    expect(endsWithIgnoreCase("hello", "")).toBe(true);
    expect(endsWithIgnoreCase("", "test")).toBe(false);
});

test("endsWithIgnoreCase should handle non-string inputs", () => {
    expect(endsWithIgnoreCase(null, "test")).toBe(false);
    expect(endsWithIgnoreCase("hello", null)).toBe(false);
    expect(endsWithIgnoreCase(123, "3")).toBe(false);
});