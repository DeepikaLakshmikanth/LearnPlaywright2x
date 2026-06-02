let env = "stagging";

function setupConfig() {
    let timeout = 5000;
    console.log(env); // Accessing global variable
    console.log(timeout); // Accessing local variable
}

setupConfig();
console.log(env); // Accessing global variable
console.log(timeout); // Error: timeout is not defined