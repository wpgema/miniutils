/**
 * Removes all whitespace from a string
 * @param {string} str - The string to process
 * @returns {string} String with whitespace removed
 */
export default function removeWhitespace(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str.replace(/\s+/g, '');
}