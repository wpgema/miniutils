export default function truncate(str, length = 100) {
    if (typeof str !== "string") return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}
