// stringUtils.js - simple string manipulation functions

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Convert string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Convert string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// Check if string is a palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// Test the functions
console.log("Reverse 'hello':", reverseString("hello"));
console.log("'hello' to uppercase:", toUpperCase("hello"));
console.log("'HELLO' to lowercase:", toLowerCase("HELLO"));
console.log("Is 'racecar' a palindrome?:", isPalindrome("racecar"));
console.log("Is 'Hello' a palindrome?:", isPalindrome("Hello"));

// Export functions for module usage (optional)
module.exports = { reverseString, toUpperCase, toLowerCase, isPalindrome };
