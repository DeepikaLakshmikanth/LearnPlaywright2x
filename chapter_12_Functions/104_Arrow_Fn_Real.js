
// This is a Normal Function
function validatestatusCode(status) {

    if (status >= 200 && status <= 300) {
        return "Status code is valid";
    }

}
const validatestatusCode_Exp = validatestatusCode(230);
console.log(validatestatusCode_Exp);

// This is a fuction as an expression 
const validatestatusCode_Exp1 = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Status code is valid");
    }
}

const validatestatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Status code is valid");
    }
}