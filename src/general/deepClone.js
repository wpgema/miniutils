export default function deepClone(obj, visited = new WeakMap()) {
    // Handle null, undefined, and primitive values
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    // Handle circular references
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    
    // Handle Date objects
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // Handle Arrays
    if (obj instanceof Array) {
        const clonedArray = [];
        visited.set(obj, clonedArray);
        for (let i = 0; i < obj.length; i++) {
            clonedArray[i] = deepClone(obj[i], visited);
        }
        return clonedArray;
    }
    
    // Handle Objects
    if (typeof obj === "object") {
        const clonedObj = {};
        visited.set(obj, clonedObj);
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key], visited);
            }
        }
        return clonedObj;
    }
    
    return obj;
}