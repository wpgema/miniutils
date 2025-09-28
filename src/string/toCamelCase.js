/**
 * Converts a string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} The camelCase string
 */
export default function toCamelCase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str
        .toLowerCase()
        .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}