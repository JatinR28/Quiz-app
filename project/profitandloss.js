const questions = [
    {
        serial: 1,
        que: "If the cost price of a product is $50, and it is sold for $70, what is the profit percentage?",
        ans: 3,
        option: [
            "10%",
            "25%",
            "40%",
            "50%"
        ]
    },
    {
        serial: 2,
        que: "A shopkeeper sold a shirt for $45, which was bought for $30. Calculate the profit earned.",
        ans: 2,
        option: [
            "$10",
            "$15",
            "$20",
            "$25"
        ]
    },
    {
        serial: 3,
        que: "If a company's total revenue is $500, and its total expenses are $350, what is the net profit?",
        ans: 4,
        option: [
            "$100",
            "$150",
            "$200",
            "$150"
        ]
    },
    {
        serial: 4,
        que: "If the cost price of a book is $15, and it is sold for $12, what is the loss percentage?",
        ans: 3,
        option: [
            "10%",
            "15%",
            "20%",
            "25%"
        ]
    },
    {
        serial: 5,
        que: "A company purchased 1000 units of a product at $8 each and sold them at $10 each. Calculate the total profit.",
        ans: 1,
        option: [
            "$1000",
            "$2000",
            "$500",
            "$800"
        ]
    },
    {
        serial: 6,
        que: "If the selling price of an item is $60, and the profit percentage is 20%, what is the cost price?",
        ans: 3,
        option: [
            "$45",
            "$48",
            "$50",
            "$55"
        ]
    },
    {
        serial: 7,
        que: "A store purchased a toy for $12 and sold it for $8. Calculate the loss incurred.",
        ans: 1,
        option: [
            "$2",
            "$4",
            "$6",
            "$8"
        ]
    },
    {
        serial: 8,
        que: "If a company's total expenses are $5000, and its net profit is $2000, what is the total revenue?",
        ans: 4,
        option: [
            "$3000",
            "$4000",
            "$6000",
            "$7000"
        ]
    },
    {
        serial: 9,
        que: "A car was bought for $20,000 and sold for $18,000. Calculate the loss percentage.",
        ans: 2,
        option: [
            "5%",
            "10%",
            "15%",
            "20%"
        ]
    },
    {
        serial: 10,
        que: "If the cost price of a laptop is $800, and it is sold at a loss of 10%, what is the selling price?",
        ans: 2,
        option: [
            "$720",
            "$800",
            "$880",
            "$900"
        ]
    }
]


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