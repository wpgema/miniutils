import toKebabCase from "../src/string/toKebabCase.js";

test("toKebabCase should convert strings to kebab-case", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("hello_world")).toBe("hello-world");
    expect(toKebabCase("HelloWorld")).toBe("hello-world");
});

test("toKebabCase should handle multiple words", () => {
    expect(toKebabCase("thisIsATest")).toBe("this-is-a-test");
    expect(toKebabCase("MyLongVariableName")).toBe("my-long-variable-name");
});

test("toKebabCase should handle edge cases", () => {
    expect(toKebabCase("")).toBe("");
    expect(toKebabCase("hello")).toBe("hello");
    expect(toKebabCase("HELLO")).toBe("h-e-l-l-o");
});

test("toKebabCase should handle non-string inputs", () => {
    expect(toKebabCase(null)).toBe("");
    expect(toKebabCase(undefined)).toBe("");
    expect(toKebabCase(123)).toBe("");
});