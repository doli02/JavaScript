
'use strict';
function solve(args) {
    var arr = [
        +args[0], 
        +args[1], 
        +args[2],
        +args[3],
        +args[4]
    ];
    arr.sort(function(x, y) {
        return x -y;
    });
    return console.log(arr[arr.length - 1]);  

}

solve(['5', '2', '2', '4', '1']);
solve(['-2', '-22', '1', '0', '0']);
solve(['-2', '4', '3', '2', '0']);
solve(['0', '-2.5', '0', '5', '5']);

