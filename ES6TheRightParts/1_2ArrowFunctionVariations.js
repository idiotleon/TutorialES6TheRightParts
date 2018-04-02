// Arrow functions are [syntactically]anonymous

() => 3;

// avoid (pure)underscore variables
_ => 4;

x => 5;

(...x) => 6;

// multiple parameters have to be surrounded by parenthesis
(x, y) => 7;

// concise function body
x => { try { 3; } catch (e) { } };
// place a "return" inside the block
x => { return 3; }

x => ({ y: x })

// name referencing
var foo = x => 3;
foo.name;   // "foo"

// does not contain name referencing
// it does NOT know what foo parameter is necessary
foo(x => 3);