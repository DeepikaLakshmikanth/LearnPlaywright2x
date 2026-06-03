// Searching & Chcking 
let url = "https://stagging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("stagging"));
console.log(url.includes("production"));
// starts with and endswith
console.log(url.startsWith("https://"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));

// indexOf and lastindexof 

console.log(url.indexOf("vwo")); // 17 first occurrence
console.log(url.lastIndexOf("login"));// last occurrence
console.log(url.indexOf("notthere"));

console.log(url.search(/login/)); // regular expression
console.log(url.search(/vwo/));