/**
 * Strips HTML tags from a string
 * @param {string} str - The string to strip HTML from
 * @returns {string} String with HTML tags removed
 */
export default function stripHTML(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    return str.replace(/<[^>]*>/g, '');
}