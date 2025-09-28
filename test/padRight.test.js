import padRight from "../src/string/padRight.js";

test("padRight should pad strings on the right", () => {
    expect(padRight("hello", 10)).toBe("hello     ");
    expect(padRight("test", 8, "0")).toBe("test0000");
    expect(padRight("123", 6, "*")).toBe("123***");
});

test("padRight should handle strings longer than target", () => {
    expect(padRight("hello world", 5)).toBe("hello world");
    expect(padRight("test", 2)).toBe("test");
});

test("padRight should handle multi-character padding", () => {
    expect(padRight("hi", 8, "ab")).toBe("hi" + "ababab");
    expect(padRight("test", 10, "123")).toBe("test" + "123123");
});

test("padRight should handle edge cases", () => {
    expect(padRight("", 5)).toBe("     ");
    expect(padRight("hello", 5)).toBe("hello");
    expect(padRight("test", 0)).toBe("test");
});

test("padRight should handle non-string inputs", () => {
    expect(padRight(null, 5)).toBe("");
    expect(padRight("hello", "5")).toBe("");
    expect(padRight(123, 5)).toBe("");
});