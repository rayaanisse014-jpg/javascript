// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class (inherits from Animal)
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // ✅ Calls parent constructor
    this.breed = breed; // ✅ New property
  }

  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

// Create object
const myDog = new Dog("Buddy", "German Shepherd");

console.log(myDog.name);  // Buddy (inherited property)
console.log(myDog.breed); // German Shepherd (new property)

myDog.eat();  // ✅ Inherited method
myDog.bark(); // ✅ Child’s own method
2