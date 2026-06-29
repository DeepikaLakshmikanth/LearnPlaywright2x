// Public 
// Privtae 

class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key // private

    }

    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey
    }
}

let cred = new Credentials("admin", "secretkey_123");
console.log(cred.user);
const token = cred.pramodgetAuthHeader();
console.log(token);
