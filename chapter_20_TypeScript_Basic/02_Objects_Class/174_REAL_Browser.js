class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    /// Method : functions defined within the class is Method
    display() {
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }

}

function f1() {

}

let Login = new TestCase("Login", "Pass", "P0");
Login.display();
let Signup = new TestCase("Sign up", "Fail", "P1");
Signup.display();