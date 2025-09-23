const capitalize = require("../src/capitalize");

test("capitalize should make first letter uppercase", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("")).toBe("");
});
