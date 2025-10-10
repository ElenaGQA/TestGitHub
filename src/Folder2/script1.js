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
        console.log("Error: Division by zero is not allowed");
        return null;
    }
    return a / b;
}


function sum (arr){
let result = 0
arr.forEach(el =>{
result +=el
})
return result
}
// Test the calculator functions



// Test the calculator function
function isNotOdd(num){
    if(num%2){
       return ${num} is even`
    }
    return `${num} is odd`
}


console.log("Subtract 10 - 5 =", subtract(10, 5));
console.log("Multiply 10 * 5 =", multiply(10, 5));
console.log("Divide 10 / 5 =", divide(10, 5));
console.log("Array sum result is ", sum([1,2,3,4,5]))
console.log("Add 10 + 5 =", add(2, 3));

console.log(isNotOdd(4))
console.log(isNotOdd(13))

// Export functions for module usage (optional)
module.exports = { add, subtract, multiply, divide };