p.then(function (v) { return v.id });
// equivalent
p.then(v => v.id);


p.then(function extractId(v) { return v.id });




var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(function () {
            // 'this' keyword does not point ot 'obj' but a global object
            console.log(this.id);
        }, 100);
    }
};

obj.foo();  // undefined

var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(function () {
            console.log(this.id);
        }.bind(this), 100);
    }
};

obj.foo();  // 42


// equivalent
// In the arrow function, "this" keyword will automatically use the surronding scope
var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() => {
            // curly braces can be omitted
            console.log(this.id);
        }, 100);
    }
}

obj.foo();  // 42

var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() => {

        });
    }
}

// equivalent
var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() => {
            console.log(this.id);
        }, 100);
    }
};

// equivalent
var obj = {
    id: 42,
    foo: function foo() {
        setTimeout(() =>
            console.log(this.id)
            , 100);
    }
}

obj.foo();