let momPromise = new Promise((resolve, reject) => {
  let boyBehavedWell = true; // Change this to false to test rejection

  console.log("Mother says: If you behave well, I’ll buy you a phone next week.");

  setTimeout(() => {
    if (boyBehavedWell) {
      resolve("Mother bought you a new phone 📱!");
    } else {
      reject("You misbehaved! No phone for you 😢.");
    }
  }, 3000); // 3 seconds = represents waiting for 1 week
});
//consumig the promises

momPromise
  .then((message) => {
    console.log("Boy says:", message);
    return newPromise()
  })
  .catch((error) => {
    console.log("Boy says:", error);
  });
  
