function foo(x, y) {
    if (x > y) {
        // a constant is a variable that cannot be re-assigned (nothing to do with the value)
        const x = 2, y = x * 3;

    }
}

{
    const x = [1, 2, 3];

    //  We passed in a reference to an immutable value 
    foo(x);
}


{
    // starting from ES5
    var x = Object.freeze([1, 2, 3]);

    // ...

    // foo() will never change x
    foo(x);
}