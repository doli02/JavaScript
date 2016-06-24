function solve(args) {
    var inputNum = +args[0],
        position = 3,
        mask,
        numberAndMask,
        bit;


    mask = 1 << position;
    numberAndMask = inputNum & mask;
    bit = numberAndMask >> position;
    console.log(bit);
}

solve([15]);
solve([1024]);