// Addition operation
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers!");
    }
    return a + b; 
}

// Subtraction operation
function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers!");
    }
    return a - b; 
}

// Multiplication operation
function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers!");
    }
    return a * b;
}
// Division operation
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers!");
    }
    if (b === 0) {
        throw new Error("You can't divide by zero! It's against the law of math!");
    }
    return a / b; 
}

module.exports = {add, subtract, multiply, divide};