import { isEmptyObject } from "../src/object/isEmptyObject.js";

describe("isEmptyObject", () => {
    test("should return true for empty object", () => {
        expect(isEmptyObject({})).toBe(true);
    });

    test("should return false for non-empty object", () => {
        expect(isEmptyObject({ a: 1 })).toBe(false);
    });

    test("should return false for object with multiple properties", () => {
        expect(isEmptyObject({ a: 1, b: 2 })).toBe(false);
    });

    test("should throw error if input is null", () => {
        expect(() => isEmptyObject(null)).toThrow(TypeError);
    });

    test("should throw error if input is not an object", () => {
        expect(() => isEmptyObject("string")).toThrow(TypeError);
        expect(() => isEmptyObject(123)).toThrow(TypeError);
        expect(() => isEmptyObject([])).not.toThrow(); // array is object
    });

    test("should return true for empty array (array is an object too)", () => {
        expect(isEmptyObject([])).toBe(true);
    });

    test("should return false for non-empty array", () => {
        expect(isEmptyObject([1, 2, 3])).toBe(false);
    });
});
