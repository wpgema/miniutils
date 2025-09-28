/**
 * Pads a string on the right side
 * @param {string} str - The string to pad
 * @param {number} length - Target length
 * @param {string} char - Character to pad with (default: ' ')
 * @returns {string} The padded string
 */
export default function padRight(str, length, char = ' ') {
    if (typeof str !== 'string' || typeof length !== 'number') {
        return '';
    }
    
    if (str.length >= length) {
        return str;
    }
    
    const padLength = length - str.length;
    const padding = char.toString().repeat(Math.ceil(padLength / char.length));
    
    return str + padding.slice(0, padLength);
}