function solve(args) {
    var num = +args[0];

    if ((num % 7 === 0) && (num % 5 === 0)){
        console.log("true" + ' ' + num);
    }
    else{
        console.log("false" + ' ' + num);
    }
}

solve(['3']);
solve(['0']);
solve(['5']);
solve(['7']);