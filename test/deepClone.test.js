import deepClone from "../src/general/deepClone.js";

describe("deepClone", () => {
    test("should clone primitive values", () => {
        expect(deepClone(42)).toBe(42);
        expect(deepClone("hello")).toBe("hello");
        expect(deepClone(true)).toBe(true);
        expect(deepClone(null)).toBe(null);
        expect(deepClone(undefined)).toBe(undefined);
    });

    test("should clone simple objects", () => {
        const obj = { name: "John", age: 30 };
        const cloned = deepClone(obj);
        
        expect(cloned).toEqual(obj);
        expect(cloned).not.toBe(obj);
        
        // Modify original to ensure they're independent
        obj.name = "Jane";
        expect(cloned.name).toBe("John");
    });

    test("should clone nested objects", () => {
        const obj = {
            user: {
                name: "John",
                address: {
                    city: "Jakarta",
                    country: "Indonesia"
                }
            },
            hobbies: ["reading", "coding"]
        };
        
        const cloned = deepClone(obj);
        
        expect(cloned).toEqual(obj);
        expect(cloned).not.toBe(obj);
        expect(cloned.user).not.toBe(obj.user);
        expect(cloned.user.address).not.toBe(obj.user.address);
        expect(cloned.hobbies).not.toBe(obj.hobbies);
        
        // Modify nested properties
        obj.user.name = "Jane";
        obj.user.address.city = "Bandung";
        obj.hobbies.push("gaming");
        
        expect(cloned.user.name).toBe("John");
        expect(cloned.user.address.city).toBe("Jakarta");
        expect(cloned.hobbies).toHaveLength(2);
    });

    test("should clone arrays", () => {
        const arr = [1, 2, { name: "test" }, [3, 4]];
        const cloned = deepClone(arr);
        
        expect(cloned).toEqual(arr);
        expect(cloned).not.toBe(arr);
        expect(cloned[2]).not.toBe(arr[2]);
        expect(cloned[3]).not.toBe(arr[3]);
        
        // Modify original
        arr[0] = 99;
        arr[2].name = "modified";
        arr[3].push(5);
        
        expect(cloned[0]).toBe(1);
        expect(cloned[2].name).toBe("test");
        expect(cloned[3]).toHaveLength(2);
    });

    test("should clone Date objects", () => {
        const date = new Date("2023-01-01");
        const cloned = deepClone(date);
        
        expect(cloned).toEqual(date);
        expect(cloned).not.toBe(date);
        expect(cloned instanceof Date).toBe(true);
        
        // Modify original
        date.setFullYear(2024);
        expect(cloned.getFullYear()).toBe(2023);
    });

    test("should handle circular references gracefully", () => {
        const obj = { name: "test" };
        obj.self = obj; // Create circular reference
        
        const cloned = deepClone(obj);
        
        // Should not throw an error and should handle circular references
        expect(cloned).toEqual(expect.objectContaining({ name: "test" }));
        expect(cloned.self).toBe(cloned); // The cloned object should reference itself
        expect(cloned).not.toBe(obj); // But should be a different object
    });
});