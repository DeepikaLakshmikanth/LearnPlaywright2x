let apiCall1 = new Promise(function (resolve, reject) {
    reject("500 : Error statsus");
});

apiCall1.then(function (data) {
    console.log("Success Data");
}).catch(function (error) {
    console.log(error);

});