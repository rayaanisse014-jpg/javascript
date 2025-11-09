// {
//     firstname: "Ahmed" ,

//     age: 40
// }


// [
//     "banana" , 

//     "apple",
// ]

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); 
// // Output: [1, 2, 3, 4, 5]
// const fruits = ["apple", "banana", "mango"];
// const copy = [...fruits]; // Spread operator
// console.log(fruits)
// console.log(copy)

// const user = { name: "Ali", age: 20 };
// const updatedUser = { ...user, city: "Mogadishu" };

// console.log(updatedUser);
// // Output: { name: "Ali", age: 20, city: "Mogadishu" }

function multipy(x,y) {
  return x * y;
}
let numbers = [3,5] 
let result = multipy(...numbers);
console.log(result);