// 1. Greeting Builder
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
function greetingMessage(timeOfDay) {
    if (timeOfDay == "morning") {
        return "Good morning";
    } else if (timeOfDay == "afternoon") {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}
function createGreeting(firstName, lastName, timeOfDay) {
    let name = fullName(firstName, lastName);
    let greeting = greetingMessage(timeOfDay);
    return greeting + ", " + name + "!";
}
//Output
console.log(createGreeting("Premjeet", "Saha", "morning"));
console.log(createGreeting("Shruti Snigdha", "Samal", "afternoon"));
console.log(createGreeting("M.D", "Waiz", "evening"));
