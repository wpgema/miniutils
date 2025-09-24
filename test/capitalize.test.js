import capitalize from "../src/string/capitalize.js";

test("capitalize should make first letter uppercase", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("")).toBe("");
});
