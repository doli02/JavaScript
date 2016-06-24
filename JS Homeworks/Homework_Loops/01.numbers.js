'use strict';
function solve(args) {
    var n = +args[0],
        i,
        output = '';

        for (i = 1; i <= n; i += 1) {
        output += i + ' ';
        }
        console.log(output);
}

solve(['5']);
solve(['1']);
solve(['10']);