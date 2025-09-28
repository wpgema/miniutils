/**
 * Repeats a string a specified number of times
 * @param {string} str - The string to repeat
 * @param {number} times - Number of times to repeat
 * @returns {string} The repeated string
 */
export default function repeatString(str, times) {
    if (typeof str !== 'string' || typeof times !== 'number') {
        return '';
    }
    
    if (times < 0) {
        return '';
    }
    
    return str.repeat(times);
}