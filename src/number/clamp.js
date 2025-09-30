export default function clamp(value, min, max) {
    if (typeof value !== "number" || typeof min !== "number" || typeof max !== "number") {
        throw new TypeError("All arguments must be numbers");
    }
    if (min > max) {
        throw new RangeError("Min cannot be greater than Max");
    }
    return Math.min(Math.max(value, min), max);
}
