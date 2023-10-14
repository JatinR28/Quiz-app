const questions = [
    {
    serial: 1,
    que: "What does probability mean?",
    ans: 3,
    option: [
      "The total number of possible outcomes in an event",
      "The ratio of favorable outcomes to all outcomes",
      "The chance of an event happening",
      "How certain an event will occur" ]
  },
    {
    serial: 2,
    que: " Who provided the definition for probability?",
    ans: 4,
    option: [
       "Archimedes",
       "Einstein",
       "Euclid",
       "Simon Laplace"
    ]
  },
    {
    serial: 3,
    que: "What is the probability of an impossible event?",
    ans: 2,
    option: [
     "1",
     "0",
     "Insufficient data",
     "Not defined"
    ]
  },
    {
    serial: 4,
    que: " When rolling a fair six-sided die, what is the probability of obtaining an even number?",
    ans:  4,
    option: [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ]
  },
    {
    serial: 5,
    que: " In a discrete probability distribution, the sum of all probabilities is always?",
    ans: 1,
    option: [
      "1",
      "0",
      "Undefined",
      "Infinite"
    ]
  },
  

     {
     serial: 6,
     que: " If the probability of hitting the target is 0.3, find mean and variance.",
     ans: 2,
     option: [
       "0.3, 0.16",
       "0.3, 0.21",
       "0.6, 0.16",
       "0.6, 0.24"
 ] },
    
 {
  serial: 7,
  que: "What is the probability of a sure event? ",
  ans: 1,
  option: [
    "1",
    "0",
    "1/4",
    "1/2"
] },

{
  serial: 8,
  que: "  How many outcomes are possible when drawing a card from deck of cards?",
  ans: 4,
  option: [
    "1",
    "13",
    "26",
    "52"
] },

{
  serial: 9,
  que: "Which of the following cannot be the value of probability? ",
  ans: 3,
  option: [
    "1",
    "1/2",
    "-1",
    "0"
] },

{
  serial: 10,
  que: " A fair coin is tossed thrice, what is the probability of getting all 3 same outcomes?",
  ans: 1,
  option: [
    "1/4",
    "3/4",
    "1/6",
    "1/2"
] },
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