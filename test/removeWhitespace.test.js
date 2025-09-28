import removeWhitespace from "../src/string/removeWhitespace.js";

test("removeWhitespace should remove all whitespace", () => {
    expect(removeWhitespace("hello world")).toBe("helloworld");
    expect(removeWhitespace("  test  string  ")).toBe("teststring");
    expect(removeWhitespace("a b c d e")).toBe("abcde");
});

test("removeWhitespace should handle different whitespace types", () => {
    expect(removeWhitespace("hello\tworld")).toBe("helloworld");
    expect(removeWhitespace("line1\nline2")).toBe("line1line2");
    expect(removeWhitespace("text\r\nmore")).toBe("textmore");
});

test("removeWhitespace should handle edge cases", () => {
    expect(removeWhitespace("")).toBe("");
    expect(removeWhitespace("   ")).toBe("");
    expect(removeWhitespace("nowhitespace")).toBe("nowhitespace");
});

test("removeWhitespace should handle non-string inputs", () => {
    expect(removeWhitespace(null)).toBe("");
    expect(removeWhitespace(undefined)).toBe("");
    expect(removeWhitespace(123)).toBe("");
});