export default function isEmptyArray(value) {
    if (Array.isArray(value) || typeof value === "string") {
        return value.length === 0;
    }
    if (value && typeof value === "object") {
        return Object.keys(value).length === 0;
    }
    return !value;
}
