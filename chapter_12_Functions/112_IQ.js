let g_x = 10;
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); // Accessing outer function variable  
    }


    inner();
    console.log(y); // Accessing outer function variable

}

