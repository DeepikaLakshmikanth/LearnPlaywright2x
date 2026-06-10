function print() {
    console.log("Normal function is called");
}

function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, Your order is placed");
    pramodCallback();
}

//First way of call back
placeOrder("Pizza", print);
//Second way of call back
placeOrder("Pizza", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function without name!");

})