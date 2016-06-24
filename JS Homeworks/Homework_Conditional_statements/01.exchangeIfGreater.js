function solve(args) {
    var a = +args[0],
        b = +args[1], 
        greater = a,
        smaller;

    if (greater < b) {
        greater = b;
        smaller = a;
        console.log(smaller + ' ' + greater);
    }
    else if (greater > b){
        smaller = b;
        console.log(smaller + ' ' + greater);    }
    else {
        console.log(a + " = " + b);
    }
}

solve(['5', '2']);
solve(['3', '4']);
solve(['5.5', '4.5']);
solve(['4', '4']);