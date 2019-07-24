/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this. refers to the person
* 2. 
* 3. used to create a new function 
* 4. We can tell Javascript tell the engine to set the value
*
* write out a code example of each explanation above
*/const person ={
    name: "mike",
    age: "I will never tell",
    location: "Ottawa",
    greet: function(){
        console.log(`Hi i am ${this.name} I am from ${this.location} and i am ${this.age}` years old);
    }
}
person.greet();

// Principle 1

// code example for Window Binding
    function sayName(name) {
        console.log(this);
        return name;
    }
    sayName("Mike");
    
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hola',
    sayHello: function(mike) {
    console.log(`${this.greeting} my name is ${mike}`);
    console.log(this);
    }
};
myObj.sayHello('mike');
// Principle 3

// code example for New Binding
function TradePlayer(greeter) {
    this.greeting = 'Welcome ';
    this.greeter = greeter;
    this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
    };
}

const jerry = new TradePlayer('Lebron James');
const newman = new TradePlayer('Kewai Lenoard');

jerry.speak();
newman.speak();
// Principle 4

// code example for Explicit Binding
function callOFTheWild(){
    console.log(`${this.name} says ${this.sound}!`);
}

let cow = {
    name: "James",
    species: "cow",
    sound: "moooow",
}
callOFTheWild.call(cow);