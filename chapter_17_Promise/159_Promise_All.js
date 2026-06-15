let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB ok");
let checkCache = Promise.resolve("Cache  ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine : " + results);

})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(function (msg) {
    console.log(msg);
}).catch(function (error) {
    console.log("Failed :" + error);

})

Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed "),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    console.log(results)
    // results.forEach(function (r, i) {
    //     console.log("Test " + (i + 1) + ":", r.status, "-", r.values || r.reason);
    // });
})