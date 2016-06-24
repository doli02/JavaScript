
/**Problem 9. Point in Circle and outside Rectangle
 Write an expression that checks for given point
 P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
 */

/*function CheckInCircle(x, y) {
 //The formula for circle is (x-k)^2 + (y-k)^2 = r^2
 var IsInCircle = (x - 3) * (x - 3) + (y - 3) * (y - 3) <= 3 * 3;
 return IsInCircle;
 }
 function CheckOutRectangle(x, y) {
 var outOfRectngle = x > 1 && x <= 6 && y > -1 && y <= 2;
 return outOfRectngle;
 }
 function Check(x, y) {
 if (CheckInCircle(x, y) == true && CheckOutRectangle(x, y) == true) {
 return console.log('yes');
 }
 else {
 return console.log('no');
 }
 }*/

//Check here
//Check(2.5, 1.5);          //yes
//Check(2, 0);              //no
function solve(args) {
    var x = +args[0],
        y = +args[1], 
        isInCircle,
        isOutRectangle;

        isInCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5;
        isOutRectangle = !(x >= -1 && x <= 5 && y <= 1 && y >= -1);
    if (isInCircle && isOutRectangle) {
       console.log('inside circle outside rectangle');
    } else if (isInCircle && !isOutRectangle) {
       console.log('inside circle inside rectangle');
    } else if (!isInCircle && isOutRectangle) {
       console.log('outside circle outside rectangle');
    } else {
       console.log('outside circle inside rectangle');
    }
}


solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);







