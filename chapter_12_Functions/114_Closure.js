function makeCounter(start = 0) {

    let count = start;

    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count }
    }
}

let counter = makeCounter(5);
counter.increment();
counter.increment();
console.log(counter.get()); // 7
counter.decrement();
console.log(counter.get()); // 6