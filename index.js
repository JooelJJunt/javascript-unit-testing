// Here we have small main program to run mylib.js

const { add, subtract, multiply, divide } = require("./mylib")

// Addition
console.log("\nHere we have addition.")
console.log("Calculate 2 + 3 =", add(2, 3));

// Subtract
console.log("\nHere we have subtract.")
console.log("Calculate 8 - 3 =", subtract(8, 3));

// Multiply
console.log("\nHere we have multiply.")
console.log("Calculate 2 * 3 =", multiply(2, 3));

// Divide
console.log("\nHere we have divide. \nRemember that you can't divide by zero")
console.log("Calculate 10 / 2 =", divide(10, 2));
try {
    console.log("Dividing by zero = 10 / 0", divide(10, 0));
} catch (error){
    console.log("I told you, you can't do it!!!\n", error.message);
}