import { dateFormatter } from "../src/number/dateFormatter.js";

test("dateFormatter should format dates correctly", () => {
    const date1 = new Date('2025-01-15');
    const date2 = new Date('2025-12-25');
    
    expect(typeof dateFormatter(date1)).toBe("string");
    expect(typeof dateFormatter(date2)).toBe("string");
    expect(dateFormatter(date1)).toContain("2025");
    expect(dateFormatter(date2)).toContain("2025");
});

test("dateFormatter should handle date strings", () => {
    const result1 = dateFormatter('2025-06-15');
    const result2 = dateFormatter('2025-12-31');
    
    expect(typeof result1).toBe("string");
    expect(typeof result2).toBe("string");
    expect(result1).toContain("2025");
    expect(result2).toContain("2025");
});

test("dateFormatter should handle timestamps", () => {
    const timestamp = Date.now();
    const result = dateFormatter(timestamp);
    
    expect(typeof result).toBe("string");
    expect(result).toContain("2025");
});

test("dateFormatter should handle invalid dates", () => {
    const result1 = dateFormatter('invalid-date');
    const result2 = dateFormatter(null);
    
    expect(result1).toBe("Invalid Date");
    expect(result2).toBe("1 Januari 1970");
});