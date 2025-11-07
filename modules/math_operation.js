// mathModule.js

// Function to add two numbers
export function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
export function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

// You can also export a constant
export const PI = 3.14159;
