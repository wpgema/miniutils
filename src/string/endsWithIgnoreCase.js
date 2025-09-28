/**
 * Checks if string ends with search string (case insensitive)
 * @param {string} str - The string to check
 * @param {string} search - The search string
 * @returns {boolean} True if ends with search string
 */
export default function endsWithIgnoreCase(str, search) {
    if (typeof str !== 'string' || typeof search !== 'string') {
        return false;
    }
    
    return str.toLowerCase().endsWith(search.toLowerCase());
}