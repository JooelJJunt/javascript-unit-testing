// 18.1.2025
// Jooel Junttila
// Ohjelmistojen ylläpito ja testaus - kurssi

// This test.js runs tests on calculation operations inside mylib.js

// Program uses Mocha as test runner
// test.js uses Chai "expect" statement to check the result
const { expect } = require("chai");
// Fetch functions from mylib
const { add, subtract, multiply, divide } = require("../mylib");

// Start running tests
describe("Now we do some math", () => {
    before(() => { console.log("\nTesting starts now"); });    
    after(() => { console.log("Testing is completed\n"); }); 

    // Addition calculation
    describe("add", () => {
        it("should add two numbers correctly", ()=> {
            expect(add(2, 3)).to.equal(5);
        });
        it("should throw an error if inputs are not numbers", () => {
            expect(() => add("a", 2)).to.throw();        
    });
    });
    // Subtract calculation
    describe("substract", () => {
        it("should subtract two numbers correctly", ()=> {
            expect(subtract(8, 3)).to.equal(5);
        });
        it("should throw an error if inputs are not numbers", () => {
            expect(() => subtract("a", 2)).to.throw();        
    });
    });
    // Multiply calculation
    describe("multiply", () => {
        it("should multiply two numbers correctly", ()=> {
            expect(multiply(2, 3)).to.equal(6);
        });
        it("should throw an error if inputs are not numbers", () => {
            expect(() => multiply("a", 2)).to.throw();        
    });
    });    
    // Division calculation
    describe("divide", () => {
        it("should divide two numbers correctly", ()=> {
            expect(divide(10, 2)).to.equal(5);
        });
        it("should throw an error if inputs are not numbers", () => {
            expect(() => divide("a", 2)).to.throw();        
    });
    });
});