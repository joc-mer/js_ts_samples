class Animal {
    private readonly type: string;

    constructor (type: string) {
        this.type = type;
    }

    getType(): string {
        return this.type;
    }
}

class Cow extends Animal {
    constructor () {
        super('cow');
    }
}

const myCow = new Cow();
console.log(myCow.getType());
