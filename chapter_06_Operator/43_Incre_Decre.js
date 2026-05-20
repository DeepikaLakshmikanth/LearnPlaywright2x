// Pre increment 
let a = 10;
let b = ++a; // first we will increment the value of a and then we will assign it to b
console.log(a); // 11
console.log(b); // 11

// Decrement Operator 
let a = 10;
let b = --a; // first we will decrement the value of a and then we will assign it to b
console.log(a); // 9
console.log(b); // 9

let a = 10;
let b = a--; // first we will decrement the value of a and then we will assign it to b
console.log(a); // 9
console.log(b); // 9


let a = 5, b = 9, c = 7;
let result = a > b ? a > c ? a : c : b > c ? b : c;
console.log(`${result} is greatest`); // 7

let x = 10, y = 16;
let result2 = x > y ? "X is greater than Y" : "Y is greater than X";
console.log(result2); // Y is greater than X

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a);
console.log(a);

