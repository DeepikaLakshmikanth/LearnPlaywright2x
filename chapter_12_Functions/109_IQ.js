function getstatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500 && code < 600) return "Server Error";
    return "Unknown Status";
}

const status = getstatus(200);
console.log(status);


function logTest(name) {
    console.log(`Running test ${name}`);
}

let result = logTest("Login Test");
console.log(result);

greet("Alice")
function greet(name) {
    return `Hello, ${name}!`;

}

sayHI("Bob");

const sayHI = function (name) {
    return `Hi, ${name}!`;
}