import countOccurrences from "../src/string/countOccurrences.js";

test("countOccurrences should count substring occurrences", () => {
    expect(countOccurrences("hello world hello", "hello")).toBe(2);
    expect(countOccurrences("abc abc abc", "abc")).toBe(3);
    expect(countOccurrences("javascript", "a")).toBe(2);
    expect(countOccurrences("hello", "world")).toBe(0);
});

test("countOccurrences should handle overlapping patterns", () => {
    expect(countOccurrences("aaaa", "aa")).toBe(2);
    expect(countOccurrences("abcabc", "abc")).toBe(2);
});

test("countOccurrences should handle edge cases", () => {
    expect(countOccurrences("", "test")).toBe(0);
    expect(countOccurrences("hello", "")).toBe(0);
    expect(countOccurrences("", "")).toBe(0);
});

test("countOccurrences should handle non-string inputs", () => {
    expect(countOccurrences(null, "test")).toBe(0);
    expect(countOccurrences("hello", null)).toBe(0);
    expect(countOccurrences(123, "1")).toBe(0);
});