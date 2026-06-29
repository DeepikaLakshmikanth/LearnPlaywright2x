class Car { //CAB
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }
    // Atrributes

    //Behaviour

    drive() {
        console.log("I am driving the ", this.name);

    }
}

const tesla = new Car("Model S");
tesla.drive();

const i10 = new Car("grandi10");
i10.drive();

