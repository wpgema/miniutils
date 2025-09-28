import randomString from "../src/string/randomString.js";

test("randomString should generate string of correct length", () => {
    expect(randomString(5)).toHaveLength(5);
    expect(randomString(10)).toHaveLength(10);
    expect(randomString(0)).toHaveLength(0);
});

test("randomString should generate different strings", () => {
    const str1 = randomString(10);
    const str2 = randomString(10);
    expect(str1).not.toBe(str2);
});

test("randomString should contain only valid characters", () => {
    const str = randomString(100);
    const validChars = /^[A-Za-z0-9]+$/;
    expect(str).toMatch(validChars);
});

test("randomString should handle edge cases", () => {
    expect(randomString(0)).toBe("");
    expect(randomString(-1)).toBe("");
});

test("randomString should handle non-number inputs", () => {
    expect(randomString("5")).toBe("");
    expect(randomString(null)).toBe("");
    expect(randomString(undefined)).toBe("");
});