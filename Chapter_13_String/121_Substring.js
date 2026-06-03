let str = "Login_Test_Pass_001"

console.log(str.slice(0, 5)); //Login
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));

//substring(start, end) - no negatives 

console.log(str.substring(6, 10))
console.log(str.at(1));