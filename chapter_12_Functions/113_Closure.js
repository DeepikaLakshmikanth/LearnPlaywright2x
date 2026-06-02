function outer() {
    let message = "hello";
    console.log("Outer function");

    function inner() {
        console.log(message);
    }

    return inner;
}

let fn_inner = outer();
fn_inner(); // hello