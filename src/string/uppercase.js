/**
 * Converts a string to uppercase
 * @param {string} str - The string to convert
 * @returns {string} The uppercase string
 */
export default function uppercase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.toUpperCase();
}