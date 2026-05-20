let age = 18;

if (age >= 18) {
    console.log("You are an Adult");
} else {
    console.log("You are a Minor");
}

let isLoggedIn = false;
let userRole = "";
if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("Admin can do all things");
    } else if (userRole === "viewer") {
        console.log("Welcome! Viewer - Read only access");
    } else if (userRole === "editor") {
        console.log("Welcome! Editor - Read and Write access");
    } else {
        console.log("No idea you may be a guest ! role ");
    }
}
else {
    console.log("Welcome! Guest - Limited access");
} 