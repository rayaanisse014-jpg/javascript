//compile time error
//run time error

//IDE Integrated development Environment
// Visul studio code
try{
    //open data comection
//  let firstname  
// console.log(firstname.toUpperCase())
// console.log("Hello")
// console.log("Hello2")
let dbError = new Error ("Could not connect to database")
throw dbError

} catch (error) {
console.log(error.message)
} finally{
 console.log("This will run regardeless of the error")
 //close data conection
}