"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define  Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "mango"];
// Test for equqlity and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Tests using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to Lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to Lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerica tests
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs Twenty is less than 10");
console.log(twenty < 10);
// Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" operation
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal 10 and twenty is grater than 10");
console.log(twenty != 10 && twenty > 30);
// Using and || (or)
console.log("\n 20 is grater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// Test weather an item is include in array
console.log(" IS mango include in my Fruits array");
console.log(fruits.includes("mango"));
// Not includes
console.log("\nIS mango not include in my fruits array");
console.log(!fruits.includes("mango"));
