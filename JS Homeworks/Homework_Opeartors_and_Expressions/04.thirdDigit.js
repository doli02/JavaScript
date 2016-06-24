function solve(args) {
    var digit = +args[0] + '', thirdDigit;

    thirdDigit = digit[digit.length - 3];

    if (thirdDigit === '7') {
        console.log('true');
    }
    else if (digit.length < 3) {
        console.log('false 0');
    }
    else {
        console.log('false' + ' ' + thirdDigit);
    }
}

solve([5]);
solve([701]);
solve([9703]);