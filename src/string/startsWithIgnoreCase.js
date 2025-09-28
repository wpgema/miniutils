/**
 * Checks if string starts with search string (case insensitive)
 * @param {string} str - The string to check
 * @param {string} search - The search string
 * @returns {boolean} True if starts with search string
 */
export default function startsWithIgnoreCase(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') {
        return false;
    }
    
    return str.toLowerCase().startsWith(search.toLowerCase());
}