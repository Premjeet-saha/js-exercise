const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const questions = [
    {
        question: "What does CLI stand for?",
        options: [
            "Command Line Interface",
            "Computer Language Input",
            "Code Line Index",
            "Central Logic Interpreter"
        ],
        correctAnswer: 0
    },
    {
        question: "Which keyword declares a block-scoped variable in JavaScript?",
        options: ["var", "let", "function", "return"],
        correctAnswer: 1
    },
    {
        question: "Which array method returns a brand new array instead of changing the original?",
        options: ["push", "splice", "map", "sort"],
        correctAnswer: 2
    },
    {
        question: "What is the result of typeof 'hello'?",
        options: ["string", "text", "char", "object"],
        correctAnswer: 0
    },
    {
        question: "Which of these is used to export functions in CommonJS?",
        options: ["export default", "module.exports", "import", "require.exports"],
        correctAnswer: 1
    }
];

var score = 0;
var results = [];

function printOptions(options) {
    for (var i = 0; i < options.length; i++) {
        console.log((i + 1) + ". " + options[i]);
    }
}

function askQuestion(index) {
    if (index >= questions.length) {
        finishQuiz();
        return;
    }

    var q = questions[index];

    console.log("\nQuestion " + (index + 1) + " of " + questions.length + ":");
    console.log(q.question);
    printOptions(q.options);

    rl.question("Your answer (enter option number): ", function (answer) {
        var selectedIndex = parseInt(answer) - 1;
        var isCorrect = selectedIndex === q.correctAnswer;
        var selectedText = q.options[selectedIndex];

        if (selectedText === undefined) {
            selectedText = "Invalid answer";
        }

        if (isCorrect) {
            console.log("Correct!");
            score = score + 1;
        } else {
            console.log("Incorrect. The correct answer was: " + q.options[q.correctAnswer]);
        }

        results.push({
            question: q.question,
            yourAnswer: selectedText,
            correctAnswer: q.options[q.correctAnswer],
            correct: isCorrect
        });

        askQuestion(index + 1);
    });
}

function finishQuiz() {
    console.log("\n--- Quiz Finished ---");
    console.log("Final Score: " + score + " / " + questions.length);
    console.log("\nResults:");

    for (var i = 0; i < results.length; i++) {
        var r = results[i];
        console.log((i + 1) + ". " + r.question);
        console.log("   Your answer: " + r.yourAnswer);
        console.log("   Correct answer: " + r.correctAnswer);
        console.log("   " + (r.correct ? "Correct" : "Incorrect"));
    }

    rl.close();
    process.exit(0);
}

function startQuiz() {
    console.log("Welcome to the JavaScript Basics Quiz!");
    console.log("There are " + questions.length + " questions.\n");

    rl.question("Press Enter to start...", function () {
        askQuestion(0);
    });
}

startQuiz();
