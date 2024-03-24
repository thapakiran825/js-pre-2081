// Primitive data types

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// JS is dynamically types language.

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false  //boolean
const outsideTemp = null
let userEmail; //undefined

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34567847874587458n





// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["superman", "Wonderwoman", "shaktiman"]

let myObj = {
    name : "Kiran",
    age : 25,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);