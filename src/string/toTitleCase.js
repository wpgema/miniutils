/**
 * Converts a string to Title Case
 * @param {string} str - The string to convert
 * @returns {string} The Title Case string
 */
export default function toTitleCase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
}