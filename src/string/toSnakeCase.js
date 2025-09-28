/**
 * Converts a string to snake_case
 * @param {string} str - The string to convert
 * @returns {string} The snake_case string
 */
export default function toSnakeCase(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[-\s]+/g, '_')
        .toLowerCase();
}