/**
 * Escapes HTML special characters
 * @param {string} str - The string to escape
 * @returns {string} HTML escaped string
 */
export default function escapeHTML(str) {
    if (typeof str !== 'string') {
        return '';
    }
    
    const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;'
    };
    
    return str.replace(/[&<>"']/g, char => htmlEscapes[char]);
}