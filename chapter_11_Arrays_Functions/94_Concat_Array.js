
let a = [10, 20];
let b = [30, 40];
//let c = a + b; //10,2030,40 this is incorrect way to combine 
let c = a.concat(b);
console.log(c);

let d = [...a, ...b]; ṇ
console.log(d);

let s = ["skip", "pass", "fail"];
// let r = ["blocked"];

console.log(s.join("-"));
