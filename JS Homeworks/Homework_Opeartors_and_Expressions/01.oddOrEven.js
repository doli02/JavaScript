function solve(args) {
    var num = +args[0];

    if (num % 2 === 0) {
        console.log("odd" + ' ' + num);
    }
    else{
        console.log("even" + ' ' + num);
    }
}

solve(['3']);
solve(['12']);