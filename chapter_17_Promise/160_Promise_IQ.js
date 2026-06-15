let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer : ", value);
})

// --------------------------------------

let p1 = new Promise(function (resolve, reject) {
    reject("Something Broke");
});
p1.catch(function (err) {
    console.log("Caught : ", err);
})


//----------------------------------------

let p2 = Promise.resolve(5);

p2.then(function (value) {
    return value * 2;
}).then(function (ans) {
    console.log("Result :", ans);
})

//-------------------------------------------------

Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;
    }).then(function (val2) {
        console.log(val2);
        return val2 + 1;
    }).then(function (val3) {
        console.log(val3);
    })
//------------------------------------------------

Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke Step 2");
    }).then(function (val2) {
        console.log("This step will not Run");
    }).catch(function (val3) {
        console.log("Caught the Error", val3);

    })

//=============================================

Promise.reject("Test Failed")
    .then(function (data) {
        console.log("Data : ", data);
    }).catch(function (err) {
        console.log("Error :", err);
    }).finally(function () {
        console.log("Cleanup done");

    })

//------------------------------------------------

Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);
})
Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
})

//-----------------------------

let t1 = Promise.resolve("Login Pass");
let t2 = Promise.resolve("Search Pass");
let t3 = Promise.resolve("Logout Pass");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
})
//----------------------------------------------------------------------------
let s1 = Promise.resolve(" Pass");
let s2 = Promise.reject(" Failed");
let s3 = Promise.resolve(" Pass");

Promise.all([s1, s2, s3])
    .then(function (results) {
        console.log("All are :", results);
    }).catch(function (err) {
        console.log("Stopped : ", err);

    })


//---------------------------------------------------------------------------------
Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201"),
]).then(function (results) {
    console.log(results);
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "-> " + val);
    });
});