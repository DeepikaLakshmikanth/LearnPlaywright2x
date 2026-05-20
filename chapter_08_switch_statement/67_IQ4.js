let value = "5";
switch (value) {
    case 5:
        console.log("Number is matched ");
        break;
    case "5":
        console.log("String '5'is matched ");
        break;
    default:
        console.log("The value is something else");
}


let status = 0
switch (status) {
    case false:
        console.log("Status is zero");
        break;
    case 0:
        console.log("Status is one");
        break;
    default:
        console.log("Status is something else");
}