'use strict';
function solve(args) {
    var hexNumber = (args[0]) + '',
        i,
        hexSymbols = '0123456789ABCDEF',
        output = 0;

        for (i = 0; i < hexNumber.length; i += 1) {
            output += hexSymbols.indexOf(hexNumber[i]) * Math.pow(16, hexNumber.length - 1 - i);
 
        }
        console.log(output);

}

solve(['FE']);
solve(['1AE3']);
solve(['4ED528CBB4']);