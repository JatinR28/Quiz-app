const questions = [
    {
        serial: 1,
        que: "If Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours, how long will it take to fill the tank if both pipes are open?",
        ans: 3,
        option: [
            "12 hours",
            "16 hours",
            "24 hours",
            "32 hours"
        ]
    },
    {
        serial: 2,
        que: "Pipe X can fill a tank in 12 hours, while Pipe Y can fill the same tank in 8 hours. How long will it take to fill the tank if both pipes are open?",
        ans: 2,
        option: [
            "3.6 hours",
            "4.8 hours",
            "5.6 hours",
            "7.2 hours"
        ]
    },
    {
        serial: 3,
        que: "A leak in a cistern can empty it in 10 hours. If the cistern is full and both the pipe and the leak are open, it takes 12 hours to fill the cistern. How long would it take to empty the full cistern if only the leak is open?",
        ans: 4,
        option: [
            "40 hours",
            "48 hours",
            "54 hours",
            "60 hours"
        ]
    },
    {
        serial: 4,
        que: "Pipe A can fill a tank in 15 hours, and Pipe B can fill the same tank in 10 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?",
        ans: 2,
        option: [
            "4 hours",
            "6 hours",
            "8 hours",
            "12 hours"
        ]
    },
    {
        serial: 5,
        que: "Two pipes can fill a tank in 36 minutes and 45 minutes, respectively. If both pipes are opened together, how long will it take to fill the tank?",
        ans: 2,
        option: [
            "15 minutes",
            "20 minutes",
            "25 minutes",
            "30 minutes"
        ]
    },
    {
        serial: 6,
        que: "Pipe P can fill a tank in 4 hours, while Pipe Q can empty the same tank in 6 hours. If both pipes are open, how long will it take to fill the tank?",
        ans: 3,
        option: [
            "8 hours",
            "10 hours",
            "12 hours",
            "14 hours"
        ]
    },
    {
        serial: 7,
        que: "A pipe can fill a tank in 8 hours, and another pipe can empty the same tank in 12 hours. If both pipes are open, how long will it take to fill the tank?",
        ans: 4,
        option: [
            "16 hours",
            "18 hours",
            "20 hours",
            "24 hours"
        ]
    },
    {
        serial: 8,
        que: "Pipe R can fill a tank in 20 minutes, and Pipe S can fill the same tank in 30 minutes. How long will it take to fill the tank if both pipes are open?",
        ans: 3,
        option: [
            "8 minutes",
            "10 minutes",
            "12 minutes",
            "15 minutes"
        ]
    },
    {
        serial: 9,
        que: "Two pipes, A and B, can fill a tank in 15 hours and 20 hours, respectively. If both pipes are opened together, how much time will it take to fill half of the tank?",
        ans: 3,
        option: [
            "5 hours",
            "7.5 hours",
            "10 hours",
            "12.5 hours"
        ]
    },
    {
        serial: 10,
        que: "Pipe X can fill a tank in 5 hours, while Pipe Y can empty the same tank in 7 hours. If both pipes are opened together, how long will it take to fill the tank?",
        ans: 3,
        option: [
            "25 hours",
            "30 hours",
            "35 hours",
            "40 hours"
        ]
    }
];


document.querySelector(".main-container").style.display = "none";
let nextButton = document.querySelector('.btn5');
let option1 = document.querySelector('.btn1');
let option2 = document.querySelector('.btn2');
let option3 = document.querySelector('.btn3');
let option4 = document.querySelector('.btn4');
let timer = document.getElementById('timer');
let score = document.querySelector('#score');
let calculateScore = 0;
let calculateAttempted = 0;
let correctAnswers = document.querySelector('#correctAnswers');
let wrongAttemps = document.querySelector('#wrongAttemps');
let timeTaken = document.querySelector('#timeTaken');
let totalAttempted = document.querySelector('#totalAttempted');

let i = 0;
let timeleft;
let timeinterval;
function startTimer(duration) {

    timeleft = duration;
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(updatetime, 1000);
}

function updatetime() {

    if (timeleft > 0) {
        timer.textContent = `${timeleft}`;
        timeleft--;
    }
    else {
        clearInterval(timeinterval);
        timer.innerHTML = `times up`;
    }
}

let questionContainer = document.querySelector('.question-container');
let originalBackgroundColor = option1.style.backgroundColor;
let originalColor = option1.style.color;
function loadQuiz(i) {
    score.innerHTML = `SCORE : ${calculateScore}`;
    if (i >= 10) {
        resultshow();
    }
    clearInterval(timeinterval);
    startTimer(10);
    option1.style.backgroundColor = originalBackgroundColor;
    option1.style.color = originalColor;
    option2.style.backgroundColor = originalBackgroundColor;
    option2.style.color = originalColor;
    option3.style.backgroundColor = originalBackgroundColor;
    option3.style.color = originalColor;
    option4.style.backgroundColor = originalBackgroundColor;
    option4.style.color = originalColor;
    console.log(questions[i].que);


    questionContainer.innerHTML = questions[i].que;
    option1.innerHTML = questions[i].option[0];
    option2.innerHTML = questions[i].option[1];
    option3.innerHTML = questions[i].option[2];
    option4.innerHTML = questions[i].option[3];


    
    
}
    option1.addEventListener('click', () => { checkAnswer(i, 1) });
    option2.addEventListener('click', () => { checkAnswer(i, 2) });
    option3.addEventListener('click', () => { checkAnswer(i, 3) });
    option4.addEventListener('click', () => { checkAnswer(i, 4) });
    nextButton.addEventListener('click', () => { loadQuiz(++i) });

function resultshow() {
    correctAnswers.innerHTML+=`     ${calculateScore}`;
    wrongAttemps.innerHTML+=`       ${calculateAttempted-calculateScore}`;
    totalAttempted.innerHTML+=`     ${calculateAttempted}`;

    document.querySelector(".main-container1").style.display = "none";
    document.querySelector(".main-container").style.display = "";

}

function checkAnswer(questionIndex, optionChoosen) {
    calculateAttempted++;
    if (questions[i].ans == optionChoosen) {
        calculateScore += 1;
        console.log(calculateScore);
        console.log("correct ans");
        console.log(optionChoosen);
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'green';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'green';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'green';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'green';
            option4.style.color = 'white'
        }
    }
    else {
        console.log("Wrong");
        if (optionChoosen == 1) {
            option1.style.backgroundColor = 'red';
            option1.style.color = 'white'
        }
        if (optionChoosen == 2) {
            option2.style.backgroundColor = 'red';
            option2.style.color = 'white'
        }
        if (optionChoosen == 3) {
            option3.style.backgroundColor = 'red';
            option3.style.color = 'white'
        }
        if (optionChoosen == 4) {
            option4.style.backgroundColor = 'red';
            option4.style.color = 'white'
        }
    }
}
loadQuiz(0);