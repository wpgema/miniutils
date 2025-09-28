import toSnakeCase from "../src/string/toSnakeCase.js";

test("toSnakeCase should convert strings to snake_case", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
    expect(toSnakeCase("hello world")).toBe("hello_world");
    expect(toSnakeCase("hello-world")).toBe("hello_world");
    expect(toSnakeCase("HelloWorld")).toBe("hello_world");
});

test("toSnakeCase should handle edge cases", () => {
    expect(toSnakeCase("")).toBe("");
    expect(toSnakeCase("hello")).toBe("hello");
    expect(toSnakeCase("HELLO")).toBe("hello");
});

test("toSnakeCase should handle non-string inputs", () => {
    expect(toSnakeCase(null)).toBe("");
    expect(toSnakeCase(undefined)).toBe("");
    expect(toSnakeCase(123)).toBe("");
});