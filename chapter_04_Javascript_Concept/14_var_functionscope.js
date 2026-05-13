var a = 10; // Global scope
console.log(a); //10

function HelloPrint() {
    var a = 20; // Local scope
    console.log("Hello, Welcome to Testing Academy");
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F->" + a);
}

console.log("G->" + a);
HelloPrint(); //function call