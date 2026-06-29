class Environment {
    constructor(name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    }

    getURL() {
        return console.log("https://" + this.name + ":" + this.port);
    }

}

let env1 = new Environment();
let env2 = new Environment("production", 8080);

env1.getURL();
env2.getURL();
