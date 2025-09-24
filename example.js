import { isEmpty, capitalize, sum, lowercase, uppercase, slug, deepClone } from "./src/index.js";

console.log(isEmpty([]));    
console.log(capitalize("hello")); 
console.log(sum([1, 2, 3, 4, 15, 5])); 
console.log(lowercase("HELLO"));
console.log(uppercase("hello"));
console.log(slug("JavaScript is Awesome"));

// Deep Clone Example
const originalUser = {
    name: "John Doe",
    age: 30,
    address: {
        city: "Jakarta",
        country: "Indonesia"
    },
    hobbies: ["reading", "coding", "traveling"]
};

const clonedUser = deepClone(originalUser);
console.log("Original:", originalUser);
console.log("Cloned:", clonedUser);

originalUser.name = "Jane Doe";
originalUser.address.city = "Bandung";
originalUser.hobbies.push("gaming");

console.log("After modifying original:");
console.log("Original:", originalUser);
console.log("Cloned (unchanged):", clonedUser); 