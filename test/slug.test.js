import slug from "../src/string/slug.js";

test("slug should convert strings to URL-friendly slugs", () => {
    expect(slug("Hello World")).toBe("hello-world");
    expect(slug("JavaScript is Awesome")).toBe("javascript-is-awesome");
    expect(slug("My Blog Post Title")).toBe("my-blog-post-title");
    expect(slug("Node.js Tutorial")).toBe("nodejs-tutorial");
});

test("slug should handle special characters", () => {
    expect(slug("Hello, World!")).toBe("hello-world");
    expect(slug("React & Vue.js")).toBe("react-vuejs");
    expect(slug("100% Success Rate")).toBe("100-success-rate");
    expect(slug("Price: $99.99")).toBe("price-9999");
});

test("slug should handle spaces and separators", () => {
    expect(slug("  hello   world  ")).toBe("hello-world");
    expect(slug("hello_world_test")).toBe("hello-world-test");
    expect(slug("hello---world")).toBe("hello-world");
    expect(slug("hello   ---   world")).toBe("hello-world");
});

test("slug should handle edge cases", () => {
    expect(slug("")).toBe("");
    expect(slug("   ")).toBe("");
    expect(slug("123")).toBe("123");
    expect(slug("---")).toBe("");
    expect(slug("Hello")).toBe("hello");
});

test("slug should handle Indonesian characters", () => {
    expect(slug("Belajar JavaScript")).toBe("belajar-javascript");
    expect(slug("Tutorial Node.js Indonesia")).toBe("tutorial-nodejs-indonesia");
});

test("slug should handle non-string inputs", () => {
    expect(slug(null)).toBe("");
    expect(slug(undefined)).toBe("");
    expect(slug(123)).toBe("");
    expect(slug([])).toBe("");
    expect(slug({})).toBe("");
});