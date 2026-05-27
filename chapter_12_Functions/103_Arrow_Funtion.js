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