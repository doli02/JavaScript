function solve(args) {
    var a = +args[0],
        b = +args[1], 
        c = +args[2];

    if ((a > b) && (a > c))  {
        if (b > c) {
            console.log(a + ' ' + b + ' ' + c );        
        }
        else{
            console.log(a + ' ' + c + ' ' + b );        
        }
    }
    else if ((b > c) && (b > a))  {     
        if (c > a) {
           console.log(b + ' ' + c + ' ' + a );  
        }
        else{
            console.log(b + ' ' + a + ' ' + c );        
        }   
    }
    else if ((c > a) && (c > b))  {
        if (a > b) {
            console.log(c + ' ' + a + ' ' + b );  
        }
        else{
            console.log(c + ' ' + b + ' ' + a );        
        }
    }
}

solve(['5', '1', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-0.1', '-0.5', '-1.1']); 