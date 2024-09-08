let score = undefined

let valueInNumber = Number(score)

//console.log(typeof score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)
//console.log(typeof NaN)

//=============================== Operations ====================

let type1 = "1"+2
let type2 = "1"+2+2
let type3 = 1+2+"2"
let type4 = true
let type5 = ""

//console.table([type1,type2,type3,+type4,+type5]) //all depends on first value

let num1, num2, num3
num1=num2=num3=1+2

let gameCounter = 100
gameCounter++
++gameCounter
//console.log(gameCounter)

//==================== Prifix and postfix=============================

let x = 3;
let y = x++;

//console.log(`x : ${x} , y: ${y}`);


let x2 = 3;
let y2 = x2++;

//console.log(`x2: ${x2} , y2: ${y2}`);

let a = 3;
let b = ++a;
//console.log(`a:${a}, b:${b}`);


//=============================== Comparison ============================

console.log(null > 0);
console.log(null == 0); 
console.log(null >= 0); // here == operator turns null  as Zero. Where other operator turns 
                        //it into another number 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); // here null is converted as Zero

/////// Note: Stop this type of conversions................

//================================== Strict Check (===) ============================
//checks not only value but also data type

console.log("2" === 2);
