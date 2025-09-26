// numberHelper.test.js
import { clamp } from "../src/number/clamp.js";

describe("clamp", () => {
    test("should return the same value if within range", () => {
        expect(clamp(5, 1, 10)).toBe(5);
    });

    test("should clamp to min if value is below range", () => {
        expect(clamp(-5, 0, 10)).toBe(0);
    });

    test("should clamp to max if value is above range", () => {
        expect(clamp(15, 0, 10)).toBe(10);
    });

    test("should work with negative numbers", () => {
        expect(clamp(-3, -10, -1)).toBe(-3);
    });

    test("should throw error if arguments are not numbers", () => {
        expect(() => clamp("5", 0, 10)).toThrow(TypeError);
        expect(() => clamp(5, "0", 10)).toThrow(TypeError);
    });

    test("should throw error if min > max", () => {
        expect(() => clamp(5, 10, 0)).toThrow(RangeError);
    });
});
