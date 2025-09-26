import { reverse } from "../src/string/reverse.js";

describe("reverse", () => {
    test("should reverse a simple string", () => {
        expect(reverse("hello")).toBe("olleh");
    });

    test("should handle string with spaces", () => {
        expect(reverse("hello world")).toBe("dlrow olleh");
    });

    test("should handle empty string", () => {
        expect(reverse("")).toBe("");
    });

    test("should handle single character", () => {
        expect(reverse("a")).toBe("a");
    });

    test("should throw error if input is not a string", () => {
        expect(() => reverse(123)).toThrow(TypeError);
        expect(() => reverse(null)).toThrow(TypeError);
    });
});
