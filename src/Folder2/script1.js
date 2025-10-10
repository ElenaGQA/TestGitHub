// calculator.js - simple calculator functions for practice

// Addition of two numbers


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
        console.error("Error: Division by zero is not allowed");
        return null;
    }
    return a / b;
}


function sum(arr) {
    let result = 0
    arr.forEach(el => {
        result += el
    })
    return result
}
// Test the calculator functions


function isOdd(num) {
    if (num % 2) {
        return `${num} is odd`
    }
    return `${num} is even`
}

// Test the calculator function

// console.log("Add 10 + 5 =", add(10, 5));
console.log("Subtract 10 - 5 =", subtract(10, 5));
console.log("Multiply 10 * 5 =", multiply(10, 5));
console.log("Divide 10 / 5 =", divide(10, 5));
console.log("Divide 10/0= ",divide(10,0))
console.log("Array sum result is ", sum([1, 2, 3, 4, 5]))

console.log(isOdd(7))
//Here I added another function call

console.log(isOdd(10))



// Export functions for module usage (optional)
module.exports = {subtract, multiply, divide };