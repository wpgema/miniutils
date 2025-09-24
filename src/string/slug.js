/**
 * Converts a string to a URL-friendly slug
 * @param {string} str - The string to convert to slug
 * @returns {string} The slugified string
 */
export default function slug(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str
        .toLowerCase() 
        .trim()            
        .replace(/[^\w\s-]/g, '')  
        .replace(/[\s_-]+/g, '-')   
        .replace(/^-+|-+$/g, '');      
}