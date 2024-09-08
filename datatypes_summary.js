// Primitive. 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// Reference (Non primitive): Array, Objects, Functions

//=================== Symbol ========================

const id = Symbol('123');
const anotherId = Symbol('123')

//console.log( id === anotherId);  //false

//====================== Array ==================
const heros = ["Shaktiman", "Naagraj", "dogga"];

//]====================== Objects ===============
let myObj = {
    name: "Ronok",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// Stack (Primitive) , Heap (Non-primitive)

let val_1 = 45;
let val_2 = val_1;

val_1 = 33;

console.log(val_1);
console.log(val_2);

let obj = {
    email: "user@google.com",
    upi: "user@ybl"
}

let obj_2 = obj;
obj_2.upi = "afsas@uui";

console.log(obj);
console.log(obj_2);
