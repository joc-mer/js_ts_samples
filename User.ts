class User {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log('Hello ' + this.name);
    }
}

const mickael = User('Mickael');
setTimeout(mickael.display, 10);

mickael = null;