function solve(args) {
    var a = +args[0],
        b = +args[1],
        h = +args[2],
        trapezoidArea;

        trapezoidArea = ((a + b) /2 ) * h;
        console.log(parseFloat(trapezoidArea).toFixed(7));

}

solve(['5', '7', '12']);
solve(['2', '1', '33']);
solve(['8.5', '4.3', '2.7']);
solve(['100', '200', '300']);
solve(['0.222', '0.333', '0.555']);