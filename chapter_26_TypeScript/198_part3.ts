function sayHello(msg: string): void {
    console.log(msg);
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}


// never - function never returns (throws or infinite loop)
function throwError(msg: string): never {
    throw new Error(message);
}

function infiniteloop(): never {
    while (true) { }
}