function solve(args) {
    var inputNum = +args[0],
        isPrime = true;
    if (inputNum < 2)  {
        isPrime = false;
    }
    for (var i = 2; i <= Math.sqrt(inputNum); i += 1) {
        if ((inputNum % i) === 0) {
            isPrime = false;
            break;
            }            
        }
    if (isPrime) {
        console.log('true');
    }else {
        console.log('false');
    }
}

solve(['2']);
solve(['23']);
solve(['-3']);
solve(['0']);
solve(['1']);







