function foo(x, y) {
    for (let i = 0; i < 10; i++) {
        $("#btn" + i).click(function () {
            console.log("button " + i + " clicked!");
        });
    }
}

// equivalent
function foo(x, y) {
    for (var i = 0; i < 10; i++) {
        let j = i;
        $("#btn" + i).click(function () {
            console.log("button " + j + " clicked!");
        });
    }
}

/*
function foo(x, y) {
    // 'let' block form instead of 'let' declaration form
    // rejected by cc49
    let(x = 2) {
        // ..
        console.log(x);
    };
}
*/

function foo(x, y) {
    if (x > y) {
        // explicit block
        {
            let x = 2;

        }
    }
}