function runwithLogin(testFn, testName) {

    console.log(`Satrting test  ${testName}`);

    let result = testFn();
    console.log(`Finished test ${testName} -> ${result}`);

    return `Test result: ${result}`;

}

function loginTest() {
    return "Login successful";
}

function loginTestFailed() {
    return "Login failed";
}

runwithLogin(loginTest, "Login Test"); // Starting test Login Test \n Finished test Login Test \n Test result: Login successful