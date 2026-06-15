function cafe(item, callWhenTableisReady) {
    console.log("Finding Table.....1");
    console.log("Finding Table.....2");
    console.log("Finding Table.....3");
    console.log("Finding Table.....4");
    console.log(item);

    callWhenTableisReady();

}

function callWhenTableisReady() {
    console.log("Call .... 878786868");

}

cafe("Burger", callWhenTableisReady); // First way of calling a callback function
cafe("Pizza", function () {  // Second way of calling a callback function in annynomous way
    console.log("calling 678686868");
})
cafe("Momos", () => {  // Third way of calling a callback function in annynomous way
    console.log("calling 3247239472");
})