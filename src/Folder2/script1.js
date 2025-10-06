// calculator.js - simple calculator functions for practice

// Addition of two numbers
function add(a, b) {
    return a + b;
}

// Subtraction of two numbers
function subtract(a, b) {
    return a - b;
}

// Multiplication of two numbers
function multiply(a, b) {
    return a * b;
}

// Division of two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}


function isOdd(num){
    if(num%2){
       return `${num} is odd` 
    }
    return `${num} is even`
}

// Test the calculator functions
console.log("Add 10 + 5 =", add(10, 5));
console.log("Subtract 10 - 5 =", subtract(10, 5));
console.log("Multiply 10 * 5 =", multiply(10, 5));
console.log("Divide 10 / 5 =", divide(10, 5));
console.log(isOdd(7))

// Export functions for module usage (optional)
module.exports = { add, subtract, multiply, divide };