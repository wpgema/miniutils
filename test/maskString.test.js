import maskString from "../src/string/maskString.js";

test("maskString should mask characters correctly", () => {
    expect(maskString("1234567890", 2, 6)).toBe("12****7890");
    expect(maskString("hello@email.com", 5, 10)).toBe("hello*****l.com");
    expect(maskString("password", 1, 7)).toBe("p******d");
});

test("maskString should handle custom mask character", () => {
    expect(maskString("1234567890", 2, 6, "#")).toBe("12####7890");
    expect(maskString("secret", 0, 4, "X")).toBe("XXXXet");
});

test("maskString should handle edge cases", () => {
    expect(maskString("", 0, 0)).toBe("");
    expect(maskString("hello", 0, 0)).toBe("hello");
    expect(maskString("hello", 10, 15)).toBe("hello");
    expect(maskString("hello", 3, 2)).toBe("hello");
});

test("maskString should handle non-string inputs", () => {
    expect(maskString(null, 0, 1)).toBe("");
    expect(maskString(123, 0, 1)).toBe("");
    expect(maskString("hello", "0", 1)).toBe("");
});