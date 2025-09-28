/**
 * Masks characters in a string between start and end positions
 * @param {string} str - The string to mask
 * @param {number} start - Start position (inclusive)
 * @param {number} end - End position (exclusive)
 * @param {string} maskChar - Character to use for masking (default: '*')
 * @returns {string} Masked string
 */
export default function maskString(str, start, end, maskChar = '*') {
    if (typeof str !== 'string' || typeof start !== 'number' || typeof end !== 'number') {
        return '';
    }
    
    if (start < 0) start = 0;
    if (end > str.length) end = str.length;
    if (start >= end) return str;
    
    const before = str.slice(0, start);
    const masked = maskChar.repeat(end - start);
    const after = str.slice(end);
    
    return before + masked + after;
}