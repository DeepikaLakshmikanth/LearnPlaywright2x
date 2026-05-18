let rajkumar_age = 8;
let rj_will_goa = rajkumar_age >= 18 ? "wiil go to goa" : "NO_goa";
console.log(rj_will_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResults = actualStatusCode === expectedStatusCode ? " Test Passed" : "Test Failed";
console.log(testResults);

let environment = "stagging";
let baseURL = environment === "prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL);

let isCI = true;
let browser = isCI ? "chrome headless" : "chrome";
console.log("Launching the browser in ", browser, " mode");

let responseTime = 350;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response : ${responseTime} -- ${slaStatus}`);

// Nested Ternary Operator
let age = 26;
let is_pramod_goa = age >= 18 ? "Pramod will go to goa" : " else will not go to Goa";
console.log(is_pramod_goa);

let age_pramod = 45;
let is_pramod_d = age_pramod >= 18 ? (age_pramod >= 26 ? "Drink" : "No Drink") : " else will not go to Goa";
console.log(is_pramod_d);



let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status code: ${statusCode} -- ${category}`);

let temperature = 15;
let feel = temperature > 40 ? "Very Hot" :
    temperature > 30 ? "HOt " :
        temperature > 20 ? "Warm" :
            temperature > 10 ? "Cool" : "Cold";
console.log(`Temperature: ${temperature}°C -- ${feel}`);