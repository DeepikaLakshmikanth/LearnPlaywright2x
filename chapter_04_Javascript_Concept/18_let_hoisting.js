console.log(score);
let score = 100;
//ReferenceError: Cannot access 'score' before initialization

{
    // Temporal Dead Zone (TDZ) for "Score "starts here 
    // console.log(score); // ReferenceError: Cannot access 'score' before initialization
    //score = 50; // ReferenceError: Cannot access 'score' before initialization
    //typeof score; // ReferenceError: Cannot access 'score' before initialization
    //___ tDZ ends here ___
    let score = 100;
    onsole.log(score);
}