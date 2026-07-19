// 4. String Formatter

function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    var firstLetter = text.charAt(0).toUpperCase();
    var restLetters = text.slice(1).toLowerCase();
    return firstLetter + restLetters;
}

function formatDisplayName(firstName, lastName) {
    var cleanFirst = cleanText(firstName);
    var cleanLast = cleanText(lastName);

    var finalFirst = capitalize(cleanFirst);
    var finalLast = capitalize(cleanLast);

    return finalFirst + " " + finalLast;
}
//Output
console.log(formatDisplayName(' prem', 'SAHA  '));
console.log(formatDisplayName('KIM', '  jon'));
console.log(formatDisplayName('  MAdhuri  ', 'dixit'));
