// 2. Temperature Converter
function celsiusToFahrenheit(celsius) {
    var fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
}

function Temperature(value, unit) {
    return Math.round(value) + " " + unit;
}

//Output
var tempInFar = celsiusToFahrenheit(25);
console.log(Temperature(tempInFar, "F"));

var tempInCel = fahrenheitToCelsius(68);
console.log(Temperature(tempInCel, "C"));
