class BankAccount {
    #balance = 0;  // private field hidden from outside

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }

    }

    getBalance() {
        return this.#balance;  // controlled access
    }
}

const account = new BankAccount();
account.deposit(100);
account.getBalance();
console.log(account.balance); // o/p is undefined as the balance is encapsulated