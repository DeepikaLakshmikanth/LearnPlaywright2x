let username = "dev";
let passwrd = "Secure123";
let isAccountLocked = true;

if ((username === "dev" && passwrd === "Secure123") && !isAccountLocked) {
    console.log("Login successful! Welcome, " + username);
} else {
    console.log("Invalid credentials or account locked.");
}

