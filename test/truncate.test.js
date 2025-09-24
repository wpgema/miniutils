import truncate from "../src/string/truncate.js";

test("truncate should shorten string longer than length", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Short text", 20)).toBe("Short text");
    expect(truncate("", 10)).toBe("");
    expect(truncate("1234567890", 10)).toBe("1234567890");
    expect(truncate("1234567890", 9)).toBe("123456789...");
});
