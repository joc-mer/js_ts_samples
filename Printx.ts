class PrintX {
    public x: number;

    constructor(x: number) {
        this.x = x;
    }

    print(): void {
        console.log('x is ' + this.x);
    }
}

let printer = new PrintX(7);
printer.print();

let v = {
    x: 10, p: printer.print
};
v.p();

let p = v.p;
p();