import toCamelCase from "../src/string/toCamelCase.js";

test("toCamelCase should convert strings to camelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("hello-world")).toBe("helloWorld");
    expect(toCamelCase("hello_world")).toBe("helloWorld");
    expect(toCamelCase("Hello World")).toBe("helloWorld");
});

test("toCamelCase should handle edge cases", () => {
    expect(toCamelCase("")).toBe("");
    expect(toCamelCase("hello")).toBe("hello");
    expect(toCamelCase("HELLO")).toBe("hello");
    expect(toCamelCase("hello-")).toBe("hello");
});

test("toCamelCase should handle non-string inputs", () => {
    expect(toCamelCase(null)).toBe("");
    expect(toCamelCase(undefined)).toBe("");
    expect(toCamelCase(123)).toBe("");
});