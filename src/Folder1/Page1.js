// app.js - simple JS to practice Git/GitHub

// Function to greet the user
function greet(name) {
    return `Hello, ${name}! Welcome to your JS project. I want to change it second time`;
}

// Test the function
const userName = "John Doe";
console.log(greet(userName));

// Simple loop example
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Array example
const fruits = ["Apple", "Banana", "Cherry", "Orange"];
console.log("My favorite fruits are:");
fruits.forEach(fruit => console.log(fruit));
