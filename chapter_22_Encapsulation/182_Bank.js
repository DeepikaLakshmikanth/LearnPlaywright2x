const { log } = require("console");

class ICICI {
    #balance;
    name;
    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;

    }

    getBalance() {
        return this.#balance
    }

    setBalace(Balance, isCashier) {

        if (isCashier) {
            this.#balance += Balance;
        } else {
            console.log("Not allowed");

        }

    }
}

let pramod = new ICICI("Pramod", 3000);
console.log(pramod.getBalance());
pramod.setBalace(2000, false);
console.log(pramod.getBalance());

let pramod_father = new ICICI("Pramod", 3000);
console.log(pramod_father.getBalance());
pramod_father.setBalace(2000, true);
console.log(pramod_father.getBalance());