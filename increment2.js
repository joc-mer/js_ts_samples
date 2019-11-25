function increment2(a) {
    foo.n += 3;
}

let foo = {n: 2};
increment2(foo);

if (foo.n !== 5) throw new Error();
