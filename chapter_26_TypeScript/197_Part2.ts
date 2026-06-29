let unknown: unknown = "hello";


if (typeof unknown === "string") {
    console.log("Hi");
}

let msg: string = "Hello";
let username: string;
let userId: number;

function greet(name: string) {
    return `Hello, ${name}!`;
}
const multiply = (a: number, b: number): number => a * b;

let user: { name: string; age: number } = {
    name: "Jhon",
    age: 34
};