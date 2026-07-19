// 3. Number Checker
function isPositive(number) {
    return number > 0;
}

function isNegative(number) {
    return number < 0;
}

function isZero(number) {
    return number === 0;
}

function isEven(number) {
    return number % 2 === 0;
}

function describeNumber(number) {
    var positive = isPositive(number);
    var negative = isNegative(number);
    var zero = isZero(number);
    var even = isEven(number);
    var odd = !even;

    return {
        positive: positive,
        negative: negative,
        zero: zero,
        even: even,
        odd: odd
    };
}
//Output
console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
