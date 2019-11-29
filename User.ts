class User {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log('Hello ' + this.name);
    }
}

const mickael = new User('Mickael');
setTimeout(mickael.display, 10);

mickael = null;
