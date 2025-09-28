import padLeft from "../src/string/padLeft.js";

test("padLeft should pad strings on the left", () => {
    expect(padLeft("hello", 10)).toBe("     hello");
    expect(padLeft("test", 8, "0")).toBe("0000test");
    expect(padLeft("123", 6, "*")).toBe("***123");
});

test("padLeft should handle strings longer than target", () => {
    expect(padLeft("hello world", 5)).toBe("hello world");
    expect(padLeft("test", 2)).toBe("test");
});

test("padLeft should handle multi-character padding", () => {
    expect(padLeft("hi", 8, "ab")).toBe("ababab" + "hi");
    expect(padLeft("test", 10, "123")).toBe("123123" + "test");
});

test("padLeft should handle edge cases", () => {
    expect(padLeft("", 5)).toBe("     ");
    expect(padLeft("hello", 5)).toBe("hello");
    expect(padLeft("test", 0)).toBe("test");
});

test("padLeft should handle non-string inputs", () => {
    expect(padLeft(null, 5)).toBe("");
    expect(padLeft("hello", "5")).toBe("");
    expect(padLeft(123, 5)).toBe("");
});