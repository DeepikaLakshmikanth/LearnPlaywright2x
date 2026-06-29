
class Car {
    name;
    #engine;

    constructor(name, enginename) {
        this.name = name;
        this.#engine = enginename;
    }

    getengine() {
        return this.#engine;
    }
    setengine(nameEngine) {

        this.#engine = nameEngine;
    }
}

let tesla = new Car("Tesla", "V8");
console.log(tesla.getengine());
tesla.setengine("V9");
console.log(tesla.getengine());

