// 1. Calculating Area of Different Shapes
function calculateArea() {
    const shape = prompt("Enter shape type (circle, rectangle, triangle):").toLowerCase();
    const pi = 3.14159;
    let area;

    if (shape === "circle") {
        let radius = parseFloat(prompt("Enter the radius:"));
        area = pi * radius * radius;
    } else if (shape === "rectangle") {
        let length = parseFloat(prompt("Enter the length:"));
        let width = parseFloat(prompt("Enter the width:"));
        area = length * width;
    } else if (shape === "triangle") {
        let base = parseFloat(prompt("Enter the base:"));
        let height = parseFloat(prompt("Enter the height:"));
        area = (base * height) / 2;
    } else {
        console.log("Invalid shape");
        return;
    }
    console.log(`The area of the ${shape} is ${area}`);
}

// 2. Grading System
function gradingSystem() {
    let score = parseInt(prompt("Enter the student's score:"));
    let grade;

    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";

    switch (grade) {
        case "A":
            console.log("Great job for an A!");
            break;
        case "B":
            console.log("Well done for a B!");
            break;
        case "C":
            console.log("Good work for a C!");
            break;
        case "D":
            console.log("You passed with a D.");
            break;
        case "F":
            console.log("You need to work harder for an F.");
            break;
    }
}

// 3. Sum of Multiples
function sumOfMultiples(limit = 100) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log(`The sum of multiples of 3 and 5 below ${limit} is ${sum}`);
}

