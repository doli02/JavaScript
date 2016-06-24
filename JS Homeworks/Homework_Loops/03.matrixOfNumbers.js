
'use strict';
function solve(args) {
    var n = +args[0],
        i,
        j,
        output = '';

        for (i = 1; i <= n; i += 1) {
            for(j = i; j <= i + n - 1; j +=1 ) {
                output += j + ' ';
            }
            output += '\n';
        }
        console.log(output);

}

solve(['2']);
solve(['3']);
solve(['4']);
