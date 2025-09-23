export default function sum(arr) {
    if (!Array.isArray(arr)) return 0;
    return arr.reduce((a, b) => a + b, 0);
}
