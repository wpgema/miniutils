/**
 * Converts a string to kebab-case
 * @param {string} str - The string to convert
 * @returns {string} The kebab-case string
 */
export default function toKebabCase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str
        .replace(/([A-Z])/g, '-$1')
        .replace(/[_\s]+/g, '-')
        .replace(/^-/, '')
        .toLowerCase();
}