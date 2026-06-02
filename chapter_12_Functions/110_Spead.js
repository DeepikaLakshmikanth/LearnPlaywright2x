function add(a, b, c) {
    return a + b + c;
}

let num = [12, 23, 34];
console.log(add(...num));


let response_code = [200, 404, 500];

function hasError(...code) {
    return code.some(c => c >= 400);
}

console.log(hasError(...response_code));