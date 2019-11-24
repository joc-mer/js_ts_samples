function increment1(a) {
    a += 3;
}

let n = 2;
increment1(n);

if (n !== 5) throw new Error();