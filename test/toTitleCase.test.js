import toTitleCase from "../src/string/toTitleCase.js";

test("toTitleCase should convert strings to Title Case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("javascript is awesome")).toBe("Javascript Is Awesome");
    expect(toTitleCase("this is a test")).toBe("This Is A Test");
});

test("toTitleCase should handle different separators", () => {
    expect(toTitleCase("hello-world")).toBe("Hello-World");
    expect(toTitleCase("hello_world")).toBe("Hello_world");
    expect(toTitleCase("hello.world")).toBe("Hello.World");
});

test("toTitleCase should handle edge cases", () => {
    expect(toTitleCase("")).toBe("");
    expect(toTitleCase("hello")).toBe("Hello");
    expect(toTitleCase("HELLO WORLD")).toBe("Hello World");
});

test("toTitleCase should handle non-string inputs", () => {
    expect(toTitleCase(null)).toBe("");
    expect(toTitleCase(undefined)).toBe("");
    expect(toTitleCase(123)).toBe("");
});