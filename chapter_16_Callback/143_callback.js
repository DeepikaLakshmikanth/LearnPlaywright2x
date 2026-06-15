function print() {
    console.log("Normal function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, Your order is placed!! " + ClipboardItem + " is Ready");
    pramodCallback();
}

//First way of call back
placeOrder("Pizza", print);
//Second way of call back
placeOrder("Pizza", function () {
    console.log("Annyonomous Function, I am also a function wihtout name!")
});
// Third way of callin the call back function
placeOrder("Momos", () => {
    console.log("Arrow Function, I am also a function without name!");
});