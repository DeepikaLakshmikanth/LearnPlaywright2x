// Rest of the Param.
function logResult(SuiteName, ...testResults) {
    return `Suite Name: ${SuiteName}`;
    //console.log("Test Results:");
}

logResult("Login Suites", 1, 2, 3);
logResult("Reg Test", "Hello", "Hi");


const res = logResult("Login Suite")
console.log(res); 