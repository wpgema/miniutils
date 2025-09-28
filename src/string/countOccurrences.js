/**
 * Counts occurrences of a substring in a string
 * @param {string} str - The main string
 * @param {string} subStr - The substring to count
 * @returns {number} Number of occurrences
 */
export default function countOccurrences(str, subStr) {
    if (typeof str !== 'string' || typeof subStr !== 'string') {
        return 0;
    }
    
    if (subStr === '') {
        return 0;
    }
    
    let count = 0;
    let position = 0;
    
    while ((position = str.indexOf(subStr, position)) !== -1) {
        count++;
        position += subStr.length;
    }
    
    return count;
}