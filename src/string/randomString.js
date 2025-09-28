/**
 * Generates a random string of specified length
 * @param {number} length - Length of random string
 * @returns {string} Random string
 */
export default function randomString(length) {
    if (typeof length !== 'number' || length < 0) {
        return '';
    }
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return result;
}