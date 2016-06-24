function solve(args) {
    var a = +args[0],
        b = +args[1], 
        c = +args[2],
        biggestNum = a;

    if ((b > biggestNum) && (b > c))  {
        biggestNum = b;
        console.log(biggestNum);        
    }
    else if ((c > biggestNum) && (c > b) ) {
        biggestNum = c;
        console.log(biggestNum);
    }
    else {
        console.log(biggestNum);
    }

}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-0.1', '-0.5', '-1.1']);