function isEven(num) {
  // Check if the number is divisible by 2
  return num % 2 === 0;
}

// Test cases
console.log(isEven(4)); // Expected output: true
console.log(isEven(7)); // Expected output: false
console.log(isEven(-2)); // Expected output: true
console.log(isEven(0)); // Expected output: true (0 is even)
console.log(isEven(11)); // Expected output: false
console.log(isEven(100)); // Expected output: true
