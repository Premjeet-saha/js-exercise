const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (answer) {
            resolve(answer);
        });
    });
}

function buildUrl(language) {
    var base = "https://api.github.com/search/repositories";
    var query = "language:" + encodeURIComponent(language);
    var url = base + "?q=" + query + "&sort=stars&order=desc&per_page=30";
    return url;
}

function pickRandomRepo(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function printRepo(repo) {
    console.log("\n--- Random Repository ---");
    console.log("Name: " + repo.full_name);
    console.log("Description: " + (repo.description ? repo.description : "No description"));
    console.log("Stars: " + repo.stargazers_count);
    console.log("Forks: " + repo.forks_count);
    console.log("Open Issues: " + repo.open_issues_count);
    console.log("URL: " + repo.html_url);
}

async function getRandomRepo(language) {
    console.log("\nLoading...");

    var url = buildUrl(language);
    var response = await fetch(url, {
        headers: { "User-Agent": "cli-github-repo-finder" }
    });

    if (!response.ok) {
        console.log("Error: could not fetch repositories (status " + response.status + ").");
        return;
    }

    var data = await response.json();

    if (data.items.length === 0) {
        console.log("No repositories found for language: " + language);
        return;
    }

    var repo = pickRandomRepo(data.items);
    printRepo(repo);
}

async function startApp() {
    console.log("Welcome to the GitHub Random Repository Finder!");

    var running = true;

    while (running) {
        var language = await ask("\nEnter a programming language (or type 'exit' to quit): ");

        if (language === "exit") {
            running = false;
        } else {
            await getRandomRepo(language);
        }
    }

    rl.close();
    process.exit(0);
}

startApp();
