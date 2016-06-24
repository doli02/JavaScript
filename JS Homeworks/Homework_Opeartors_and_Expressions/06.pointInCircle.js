function solve(args) {
    var x = +args[0],
        y = +args[1],
        initX = 0,
        initY = 0,
        circleRadius =2,
        distance;
    distance = Math.sqrt((x - initX) * (x - initX) + (y - initY) * (y - initY)).toFixed(2);
    if (distance <= circleRadius) {
        console.log('yes' + " " + distance);
    }
    else {
        console.log('no' + " " + distance);
    }
}

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);
solve(['100', '-30']);
solve(['0','0']);







