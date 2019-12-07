function increment2(foo) {
    foo.n += 3;
}

let foo = {n: 2};
increment2(foo);

if (foo.n !== 5) throw new Error();
