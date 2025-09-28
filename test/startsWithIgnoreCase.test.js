import startsWithIgnoreCase from "../src/string/startsWithIgnoreCase.js";

test("startsWithIgnoreCase should check beginnings case insensitive", () => {
    expect(startsWithIgnoreCase("Hello World", "hello")).toBe(true);
    expect(startsWithIgnoreCase("Hello World", "HELLO")).toBe(true);
    expect(startsWithIgnoreCase("JavaScript", "java")).toBe(true);
    expect(startsWithIgnoreCase("JavaScript", "JAVA")).toBe(true);
});

test("startsWithIgnoreCase should return false for non-matches", () => {
    expect(startsWithIgnoreCase("Hello World", "world")).toBe(false);
    expect(startsWithIgnoreCase("JavaScript", "script")).toBe(false);
    expect(startsWithIgnoreCase("test", "testing")).toBe(false);
});

test("startsWithIgnoreCase should handle edge cases", () => {
    expect(startsWithIgnoreCase("", "")).toBe(true);
    expect(startsWithIgnoreCase("hello", "")).toBe(true);
    expect(startsWithIgnoreCase("", "test")).toBe(false);
});

test("startsWithIgnoreCase should handle non-string inputs", () => {
    expect(startsWithIgnoreCase(null, "test")).toBe(false);
    expect(startsWithIgnoreCase("hello", null)).toBe(false);
    expect(startsWithIgnoreCase(123, "1")).toBe(false);
});