function solve(args) {
    var a = +args[0],
        b = +args[1], 
        c = +args[2],
        result;

    if ((a !== 0) && (b !== 0) && (c !== 0))  {
        if ((a > 0 && b > 0 && c > 0) || (a < 0 && b > 0 && c < 0) || 
        (a < 0 && b < 0 && c > 0) || (a > 0 && b < 0 && c < 0)){
                console.log('+');
            } 
            else {
                console.log('-');
            }
    }
    else {
        console.log('0');
    }
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
solve(['-1', '-0.5', '-5.1']);