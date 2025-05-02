let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name); // Output: John
console.log(person.age = 35); // Output: 30
console.log(person.city); // Output: New York
person.greet(); // Output: Hello, my name is John
console.log(Object.keys(person)); // Output: ["name", "age", "city", "greet"]
console.log(Object.values(person)); // Output: ["John", 35, "New York", function]
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.displayInfo = function () {
        console.log("Car: " + this.brand + " " + this.model + ", Year: " + this.year);
    }
}
let myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo(); // Output: Car: Toyota Camry, Year: 2022

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound.");
};
let dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound.

setTimeout(function () {
    console.log("Executed after 1 second");
    }, 1000);
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const calculator = {
    multiply,
    add,
    subtract,
    divide
};
console.log(multiply(2, 3)); // Output: 6
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(2, 3)); // Output: -1
console.log(calculator.divide(2, 3)); // Output: 0.6666666666666666
const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "broccoli", "spinach"];
const food = [fruits, vegetables];
console.log(food); // Output: ["apple", "banana", "cherry", "carrot", "broccoli", "spinach"]