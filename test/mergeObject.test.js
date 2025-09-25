import { mergeObjects } from "../src/object/mergeObject.js";

describe("mergeObjects", () => {
    test("should merge two objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2 });
    });

    test("should overwrite properties with later objects", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test("should return empty object if no arguments provided", () => {
        expect(mergeObjects()).toEqual({});
    });
});
