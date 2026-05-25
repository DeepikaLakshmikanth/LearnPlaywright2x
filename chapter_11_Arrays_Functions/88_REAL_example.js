let brwoser = ['chrome', 'safari', 'edge', 'firefox', 'brave', 'opera'];
console.log(brwoser.length);
console.log(brwoser);

// brwoser.pop(); // it will remove the last element 
// console.log(brwoser);

// let removed = brwoser.shift(); // it will remove the first element 
// console.log(brwoser);
// console.log(removed);


for (i = 0; i < brwoser.length; i++) {
    if (brwoser[i] === 'firefox') {
        brwoser.splice(i, 1);
        console.log("Removed the browser firefox from selenium ")
    }
}
console.log(brwoser);