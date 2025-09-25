export function isEmptyObject(obj) {
    if (obj === null || typeof obj !== "object") {
        throw new TypeError("Argument must be an object");
    }
    return Object.keys(obj).length === 0;
}
