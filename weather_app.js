const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
var API_KEY = "Y2EDDV9F35KK8F88CF73VV2BT";
function ask(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (answer) {
            resolve(answer);
        });
    });
}

function buildUrl(location) {
    var base = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    var url = base + encodeURIComponent(location) + "/yesterday/tomorrow";
    url = url + "?key=" + API_KEY;
    url = url + "&unitGroup=metric";
    url = url + "&include=hours,current";
    url = url + "&contentType=json";
    return url;
}

function printCurrentConditions(data) {
    var current = data.currentConditions;
    console.log("\n--- Current Weather in " + data.resolvedAddress + " ---");
    console.log("Temperature: " + current.temp + " C");
    console.log("Wind Speed: " + current.windspeed + " km/h");
    console.log("Chance of Rain: " + current.precipprob + " %");
    console.log("Conditions: " + current.conditions);
}

function printHourlyPeriod(day, label) {
    console.log("\n--- " + label + " ---");
    for (var i = 0; i < day.hours.length; i++) {
        var hour = day.hours[i];
        console.log(hour.datetime + " | " + hour.temp + " C | " + hour.conditions);
    }
}

async function getWeather(location) {
    var url = buildUrl(location);

    var response = await fetch(url);

    if (!response.ok) {
        console.log("Could not fetch weather. Check the location name and your API key.");
        return;
    }

    var data = await response.json();

    printCurrentConditions(data);
    printHourlyPeriod(data.days[0], "Previous 24 Hours");
    printHourlyPeriod(data.days[2], "Next 24 Hours");
}

async function startApp() {
    console.log("Welcome to the Weather App!");

    var running = true;

    while (running) {
        var location = await ask("\nEnter a location (or type 'exit' to quit): ");

        if (location === "exit") {
            running = false;
        } else {
            await getWeather(location);
        }
    }

    rl.close();
    process.exit(0);
}

startApp();
