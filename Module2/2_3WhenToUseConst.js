const PI = 3.14;

function foo() {
    const x = [1, 2, 3];

    $("#btn").click(function () {
        console.log(x[0]);
        x.length = 0;

        // x cannot be set to null (because of const)
        // x = null;
    });
}