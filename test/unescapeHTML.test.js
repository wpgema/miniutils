import unescapeHTML from "../src/string/unescapeHTML.js";

test("unescapeHTML should unescape HTML entities", () => {
    expect(unescapeHTML("&lt;script&gt;alert(&#x27;test&#x27;)&lt;/script&gt;")).toBe("<script>alert('test')</script>");
    expect(unescapeHTML("Hello &quot;World&quot; &amp; Co.")).toBe('Hello "World" & Co.');
    expect(unescapeHTML("&lt;div&gt;content&lt;/div&gt;")).toBe("<div>content</div>");
});

test("unescapeHTML should handle different entity formats", () => {
    expect(unescapeHTML("&#39;single quote&#39;")).toBe("'single quote'");
    expect(unescapeHTML("&amp;amp; double escape")).toBe("&amp; double escape");
});

test("unescapeHTML should handle edge cases", () => {
    expect(unescapeHTML("")).toBe("");
    expect(unescapeHTML("no entities here")).toBe("no entities here");
    expect(unescapeHTML("&invalid; entity")).toBe("&invalid; entity");
});

test("unescapeHTML should handle non-string inputs", () => {
    expect(unescapeHTML(null)).toBe("");
    expect(unescapeHTML(undefined)).toBe("");
    expect(unescapeHTML(123)).toBe("");
});