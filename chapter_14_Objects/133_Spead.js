const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy);

if (copy === obj1) {
    console.log("true");
}
else {
    console.log("false");
}

let config1 = { browser: "Chrome", timeout: 3000 }; // Modifying the properties
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

console.log("-----");


const config = { browser: " Chrome", timeout: 3000 };
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);






