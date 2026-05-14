let firstName = "Pramod";
let fullName = `My name is ${firstName} Dutta`;
console.log(fullName); // My name is Pramod Dutta

const env = "stagging";
const userId = 1234;
const apiurl = `https://${env}.example.com/${userId}`;
console.log(apiurl); // https://sagging.example.com/1234

///playwirught locator

const rowIndex = 1;
const columnName = "email";
await page.locator(`table tr:nth-child(${rowIndex}) td[data-column="${columnName}"]`).textContent();

//logs
const testName = "Login Test";
const status = "Passed";
console.log(`Test: ${testName} - Status: ${status}`); // Test: Login Test - Status: Passed

const payload = ` {
    "user": "${userId}",
    "role": "${role}";
"timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);