function solve(args) {
    var width = +args[0], heigth = +args[1], area = 0, perimeter = 0;

   /* function calculateArea(args){
        var a = +args[0],
            b = +args[1];

        var area = a * b,
            perimeter = a * 2 + b * 2;

        return console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
    }
    */
    area = width * heigth;
    perimeter = 2 * width + 2 * heigth;
    console.log(parseFloat(area).toFixed(2) + ' ' + parseFloat(perimeter).toFixed(2));
}

solve(['2.5', '3']);
solve(['5', '5']);
solve(['3', '4']);