const greet = function (name) {
    return `Hello ${name}`;
}

let r = greet("Deepak");

console.log(r);

function greet1(name) {
    return `Hello ${name}`;
}

greet1("Amit");

const greet2 = function (name1) {
    return `Hello ${name1}!`;
}
console.log(greet1("Bob"));
console.log(greet2("Bob"));
