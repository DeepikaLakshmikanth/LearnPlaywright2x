import { log } from "node:console";

class Person {

    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;

    }

    getchild() {
        return this.#child1
    }
    setchild() {
        return this.#child2
    }

}

let p = new Person("Pramod", "Vrad", "Jenny");
console.log(p.name);
console.log(p.getchild());
//console.log(getchild.#child1); this cannot be done #child1 is private and cannot be driectly accessed

