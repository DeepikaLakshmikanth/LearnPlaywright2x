class Person {
    constructor() {
        console.log("I will be created when Obje is created!");
    }

    //Attributes
    name;
    email;
    salary;
    Address;

    //Behaviour

    sleep() { }
    eat() { }
    walk() { }
}

const Object_ref = new Person();
console.log(Object_ref);
