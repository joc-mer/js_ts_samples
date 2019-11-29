class A {
    _x = 10;
    private _y = 20;

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
const a = new A();
