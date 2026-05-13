// let - is Block Scoped, it can be re-assigned but not re-declared in the same scope

let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; //re-assignment is allowed
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount); //10

// let retryCount = 5; //re-declaration in the same scope is not allowed, this will throw an error

let teststatus = "pending";
if (teststatus === "pending") {
    let execitionTime = 1200;
}

//console.log(execitionTime); // ReferenceError: execitionTime is not defined. This will throw an error because execitionTime is block scoped and not accessible outside the if block