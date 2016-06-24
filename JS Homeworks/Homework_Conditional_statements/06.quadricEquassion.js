
//quadratic equation ax2 + bx + c = 0
//D = (b * b) - (4 * a * c);
//x = - b / (2 * a) => real root; 
//x1 = ( - (b) - (Math.sqrt(d)) / (2 * a);
//x2 = ( - (b) - (Math.sqrt(d)) / (2 * a);
// if D < 0 => the quadratic equation has no real roots; 
//if D = 0 => the quadratic equation has 1 real root; 
//if D > 0 => the quadratic equation has 2 real roots;

function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d,
        sqrtD, 
        x1,
        x2;

    d = b * b - 4 * a * c;
    sqrtD = Math.sqrt(d);
    if (d > 0) {
        x1 = ( -b - sqrtD) / (2 * a);
        x2 = ( -b + sqrtD) / (2 * a);
        if (x1 > x2) {
            var temp = x1;
            x1 = x2;
            x2 = temp;
        }
        console.log('x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2));
    }
    else if (d === 0) {
        x1 =  -b - sqrtD / 2 * a;
        console.log('x1=x2=' + x1.toFixed(2));
    }
    else {
        console.log('no real roots');
    }
}   

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);