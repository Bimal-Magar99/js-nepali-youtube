// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
// let userEmail = undefined
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1233543656547467456345n



// Refrence (Nonn Primitive)

// Array, Objects, Functions

const heroes =["bimal", "lord", "demon"]
let myObj = {
    name: "Bimal",
    age: "21",
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);
