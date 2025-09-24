import unique from "../src/unique.js";

test("unique should remove duplicate values from an array", () => {
    expect(unique([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    expect(unique([])).toEqual([]);
    expect(unique([1, 1, 1, 1])).toEqual([1]);
});
