const questions = [
    {
        serial: 1,
        que: "Five years ago, Alice was three times as old as Bob. If Alice is now 15 years old, how old is Bob?",
        ans: 1,
        option: [
            "5 years old",
            "10 years old",
            "15 years old",
            "20 years old"
        ]
    },
    {
        serial: 2,
        que: "The sum of the ages of a father and his son is 45 years. If the father is 5 times as old as his son, how old are they?",
        ans: 3,
        option: [
            "20 years and 25 years",
            "30 years and 15 years",
            "40 years and 5 years",
            "35 years and 10 years"
        ]
    },
    {
        serial: 3,
        que: "Ten years ago, Alice was twice as old as Carol. If Carol is currently 30 years old, how old is Alice?",
        ans: 4,
        option: [
            "20 years old",
            "30 years old",
            "40 years old",
            "50 years old"
        ]
    },
    {
        serial: 4,
        que: "In 5 years, John will be twice as old as Jane. If Jane is currently 15 years old, how old is John?",
        ans: 2,
        option: [
            "15 years old",
            "20 years old",
            "25 years old",
            "30 years old"
        ]
    },
    {
        serial: 5,
        que: "Tom is twice as old as Jerry. If the sum of their ages is 36, how old is Jerry?",
        ans: 1,
        option: [
            "12 years old",
            "18 years old",
            "24 years old",
            "30 years old"
        ]
    },
    {
        serial: 6,
        que: "The average age of a family of five members is 30 years. If the age of the youngest member is 15 years, what is the average age of the remaining family members?",
        ans: 4,
        option: [
            "20 years",
            "30 years",
            "40 years",
            "36 years"
        ]
    },
    {
        serial: 7,
        que: "A father is 4 times as old as his son. If the sum of their ages is 40 years, how old is the son?",
        ans: 1,
        option: [
            "8 years old",
            "10 years old",
            "12 years old",
            "16 years old"
        ]
    },
    {
        serial: 8,
        que: "The ratio of the ages of John and Mary is 3:5. If the sum of their ages is 40, how old is Mary?",
        ans: 3,
        option: [
            "15 years old",
            "20 years old",
            "25 years old",
            "30 years old"
        ]
    },
    {
        serial: 9,
        que: "In 3 years, Alice will be half the age of Bob. If Alice is currently 9 years old, how old is Bob?",
        ans: 4,
        option: [
            "6 years old",
            "9 years old",
            "12 years old",
            "15 years old"
        ]
    },
    {
        serial: 10,
        que: "The sum of the ages of a father and his son is 55 years. If the son is 25 years younger than the father, how old is the father?",
        ans: 3,
        option: [
            "30 years old",
            "35 years old",
            "40 years old",
            "45 years old"
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
let calculatetime = 0;
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
    document.getElementById('input1').value=localStorage.getItem("EventName")

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

/*function storeValues(e){
    e.preventDefault();

    let storedEvents= JSON.parse(localStorage.getItem("Event")) || [];

    const newEventDetail={
        name:document.getElementById('input1').Value,
    }
    storedEvents.push(newEventDetails);
    localStorage.setItem("Event", JSON.stringify(storedEvents));

    console.log('storedEvents', storedEvents);
}
 document.getElementById('input1').Value=localStorage.getItem("EventName")*/