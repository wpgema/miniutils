import { formatRupiah } from "../src/number/rupiahFormatter.js";

describe("formatRupiah", () => {
    test("should format integer correctly", () => {
        expect(formatRupiah(10000)).toBe("Rp10.000,00");
    });

    test("should format decimal correctly", () => {
        expect(formatRupiah(1234.56)).toBe("Rp1.234,56");
    });

    test("should format large number with separators", () => {
        expect(formatRupiah(1000000)).toBe("Rp1.000.000,00");
    });

    test("should throw error if input is not number", () => {
        expect(() => formatRupiah("10000")).toThrow(TypeError);
        expect(() => formatRupiah(null)).toThrow(TypeError);
        expect(() => formatRupiah({})).toThrow(TypeError);
    });
});
