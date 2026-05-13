var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome"; //declaration and initialization
var browser = "firefox"; //declaration and initialization
browser = "edge"; //re-assignment

var testcase = ["login", "logut", "search"];
for (var i = 0; i < testcase.length; i++) { //declaration and initialization
    console.log("Execiting the testcae:", testcase[i]);
}

console.log("loop counter leaked outside the loop:", i); //i is accessible outside the loop

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hello");
}

say(); //function call
say();