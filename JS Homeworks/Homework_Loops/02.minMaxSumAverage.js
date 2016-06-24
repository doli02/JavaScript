
'use strict';
function solve(args) {
    var min = +args[0],
        max = +args[0],
        i,
        sum = 0,
        average = 0,
        elementCounter = 0,
        element = 0;

        for (i = 0; i < args.length; i += 1) {
            element = +args[i];
            if (element < min) {
                min = element;
            }
            if (element > max) {
                max = element;
            }
            sum += element; 
            elementCounter +=1;
        }
        average = sum / elementCounter;

        console.log('min=' + min.toFixed(2));
        console.log('max=' + max.toFixed(2));
        console.log('sum=' + sum.toFixed(2));
        console.log('avg=' + average.toFixed(2));

}

solve(['2', '5', '1']);
solve(['2', '-1', '4']);

/*
Output:
min=3.00
max=6.00
sum=9.00
avg=4.50
*/
