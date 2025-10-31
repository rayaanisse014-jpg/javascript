let a = 5;
let b = 10;

// AND (&&)
console.log(a > 0 && b > 5);  // true (both are true)
console.log(a > 10 && b > 5); // false (first is false)

// OR (||)
console.log(a > 0 || b > 20); // true (first is true)
console.log(a > 10 || b < 5); // false (both false)

// NOT (!)
console.log(!(a > b));  // true (a > b is false, but NOT makes it true)
console.log(!(a < b));  // false (a < b is true, but NOT makes it false)
