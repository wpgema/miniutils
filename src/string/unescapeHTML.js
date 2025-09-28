/**
 * Unescapes HTML entities
 * @param {string} str - The string to unescape
 * @returns {string} HTML unescaped string
 */
export default function unescapeHTML(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    const htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#x27;': "'",
        '&#39;': "'"
    };
    
    return str.replace(/&(amp|lt|gt|quot|#x27|#39);/g, entity => htmlUnescapes[entity]);
}