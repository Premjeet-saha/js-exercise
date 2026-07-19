// 7. Grade Report Generator
function getLetterGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassed(score) {
    return score >= 60;
}

function getFeedback(grade) {
    if (grade === "A") {
        return "Excellent work";
    } else if (grade === "B") {
        return "Great job";
    } else if (grade === "C" || grade === "D") {
        return "You passed";
    } else {
        return "Keep practicing";
    }
}

function createGradeReport(name, score) {
    var grade = getLetterGrade(score);
    var passed = hasPassed(score);
    var feedback = getFeedback(grade);

    return {
        name: name,
        score: score,
        grade: grade,
        passed: passed,
        feedback: feedback
    };
}
//Output
console.log(createGradeReport('Prem', 92));
console.log(createGradeReport('Shruti', 48));
console.log(createGradeReport('Dimpi', 75));
console.log(createGradeReport('Madhumita', 60));
