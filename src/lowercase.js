/**
 * Converts a string to lowercase
 * @param {string} str - The string to convert
 * @returns {string} The lowercase string
 */
export default function lowercase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.toLowerCase();
}