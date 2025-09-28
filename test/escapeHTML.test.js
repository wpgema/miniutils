import escapeHTML from "../src/string/escapeHTML.js";

test("escapeHTML should escape HTML special characters", () => {
    expect(escapeHTML("<script>alert('xss')</script>")).toBe("&lt;script&gt;alert(&#x27;xss&#x27;)&lt;/script&gt;");
    expect(escapeHTML('Hello "World" & Co.')).toBe("Hello &quot;World&quot; &amp; Co.");
    expect(escapeHTML("<div>content</div>")).toBe("&lt;div&gt;content&lt;/div&gt;");
});

test("escapeHTML should handle edge cases", () => {
    expect(escapeHTML("")).toBe("");
    expect(escapeHTML("hello world")).toBe("hello world");
    expect(escapeHTML("123")).toBe("123");
});

test("escapeHTML should handle non-string inputs", () => {
    expect(escapeHTML(null)).toBe("");
    expect(escapeHTML(undefined)).toBe("");
    expect(escapeHTML(123)).toBe("");
});