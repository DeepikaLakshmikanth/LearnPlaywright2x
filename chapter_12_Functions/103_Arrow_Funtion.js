//Arrow function 
const greet = function (name1) {
    return "HI" + name1;
}
let result = greet("Naveen");
console.log(result);

const greet2 = (name2) => "Hi" + name2;
let r2 = greet2("modi");
console.log(r2);

const doubleIt = n => n * 2;
console.log(doubleIt(10))

const printIt = name => console.log(name);
printIt("Shah");

function add(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;
console.log(add2(2, 3));

function say() {
    console.log("Hello");
}
const say1 = () => console.log("HeHIllo");
console.log(say());
console.log(say1());

const greet = name => {
    const message = "hi" + name;
    return message;
}
console.log(greet("Aditya"));