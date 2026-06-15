let test_Run = new Promise(function (reslove, reject) {
    let apiCall = true
    if (apiCall) {
        reslove({
            "status": "Done"
        });
    } else {
        reject("Assertion Failed");
    }
}
);
test_Run.then(function (data) {
    console.log("Tick", data);
}).catch(function (error) {
    console.log("Error : " + error);
}).finally(function () {
    console.log("I will be executed anyhow !!!");
})
