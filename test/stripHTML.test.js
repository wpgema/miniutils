import stripHTML from "../src/string/stripHTML.js";

test("stripHTML should remove HTML tags", () => {
    expect(stripHTML("<p>Hello World</p>")).toBe("Hello World");
    expect(stripHTML("<div><span>Test</span></div>")).toBe("Test");
    expect(stripHTML("<h1>Title</h1><p>Content</p>")).toBe("TitleContent");
});

test("stripHTML should handle self-closing tags", () => {
    expect(stripHTML("Text<br/>More text")).toBe("TextMore text");
    expect(stripHTML("Image<img src='test.jpg'/>End")).toBe("ImageEnd");
});

test("stripHTML should handle complex HTML", () => {
    expect(stripHTML('<div class="test" id="example">Content</div>')).toBe("Content");
    expect(stripHTML("<script>alert('test')</script>Hello")).toBe("alert('test')Hello");
});

test("stripHTML should handle edge cases", () => {
    expect(stripHTML("")).toBe("");
    expect(stripHTML("No HTML here")).toBe("No HTML here");
    expect(stripHTML("<>")).toBe("");
});

test("stripHTML should handle non-string inputs", () => {
    expect(stripHTML(null)).toBe("");
    expect(stripHTML(undefined)).toBe("");
    expect(stripHTML(123)).toBe("");
});