function foo(x, y) {
    if (x > y) {
        var tmp = x;
        x = y;
        y = tmp;
    }

    // 'var'[keyword] makes block scope entirely sense
    for (var i = 0; i < 10; i++) {
        //...
    }

    // 'let'[keyword] enforces, at the compiler level, things that already stylistically signaled
    for (let i = 0; i < 10; i++) {
        //...
    }


    // error with let
    try {
        // let will lock 'z'[variable] in this scope only
        let z = bar(x * 2);
    } catch (err) {
        // ..
    }
}