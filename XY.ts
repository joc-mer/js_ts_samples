class X {
    w = 1;
    protected x = 5;
    private y = 10;
    public z = 20;
}

class Y extends X {
    compute1(): number {
        return this.w * this.x;
    }
    compute2(): number {
        return this.w * this.y;
    }
    compute3(): number {
        return this.w * this.z;
    }
    compute4(): number {
        return this.x * this.y;
    }
    compute5(): number {
        return this.x * this.z;
    }
    compute6(): number {
        return this.y * this.z;
    }
}