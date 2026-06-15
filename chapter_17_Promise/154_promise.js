let order = new Promise(function (resolve, reject) {
    let food_order = true;
    if (food_order) {
        resolve("Pizza is delivered");
    } else {
        reject("Order Cancelled");
    }
});

console.log(order);


