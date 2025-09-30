// utils.js - additional JS for GitHub practice

// Function to calculate the square of a number
function square(num) {
    return num * num;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Test the functions
const testNumber = 5;
console.log(`The square of ${testNumber} is: ${square(testNumber)}`);
console.log(`The factorial of ${testNumber} is: ${factorial(testNumber)}`);

// Export functions if using modules (optional)
module.exports = { square, factorial };
