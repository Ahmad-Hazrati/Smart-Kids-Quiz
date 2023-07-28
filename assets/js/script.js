// Import questions from questions.js
import { kg4_7_Questions, kg8_10_Questions, kg10_12_Questions} from "./questions.js";


//Variables declaration
//Audio
const backgroundMusic = new Audio('./assets/audio/background_music.mp3');
const clickSound = new Audio('./assets/audio/mouse_click.mp3');
const correctSound = new Audio('./assets/audio/correct_answer_sound.mp3');
const incorrectSound = new Audio('./assets/audio/incorrect_answer_sound.mp3');
const quizOver = new Audio('./assets/audio/quiz_over.mp3');

const soundOn = document.getElementById('sound-on');
const soundOff = document.getElementById('sound-off');

//buttons and containers
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const kg4_7 = document.querySelector(".kg4-7");
const kg8_10 = document.querySelector(".kg8-10");
const kg10_12 = document.querySelector(".kg10-12");

const ageSelection = document.querySelectorAll('.age-selection input[type="radio"]');

let questions;

// taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


// Wait for DOM to finish loading before running the quiz
// Get the button elements and add event listners to them
document.addEventListener("DOMContentLoaded", function () {
    /* changes the audio to muted */
    soundOn.addEventListener('click', function () {
        backgroundMusic.muted = true;
        incorrectSound.muted = true;
        correctSound.muted = true;
        clickSound.muted = true;
        quizOver.muted = true;

        soundOff.classList.add('active');
        soundOn.classList.remove('active');
    });
    /* changes the audio to unmuted */
    soundOff.addEventListener('click', function () {
        backgroundMusic.muted = false;
        incorrectSound.muted = false;
        correctSound.muted = false;
        clickSound.muted = false;
        quizOver.muted = false;
        soundOff.classList.remove('active');
        soundOn.classList.add('active');
    });

    startBtn.onclick = () => {
        clickSound.play();
        popupInfo.classList.add('active');
        main.classList.add('active');

    }

    exitBtn.onclick = () => {
        clickSound.play();
        popupInfo.classList.remove('active');
        main.classList.remove('active');

    }

    continueBtn.onclick = () => {
        clickSound.play();
        quizSection.classList.add('active');
        popupInfo.classList.remove('active');
        main.classList.remove('active');
        quizBox.classList.add('active');

        showQuestions(0);
        questionCounter(1);
        headerScore();
    };

    tryAgainBtn.onclick = () => {
        clickSound.play();
        quizBox.classList.add('active');
        nextBtn.classList.remove('active');
        resultBox.classList.remove('active');

        questionCount = 0;
        questionNumb = 1;
        userScore = 0;
        showQuestions(questionCount);
        questionCounter(questionNumb);

        headerScore();
    }

    goHomeBtn.onclick = () => {
        clickSound.play();
        quizSection.classList.remove('active');
        nextBtn.classList.remove('active');
        resultBox.classList.remove('active');

        questionCount = 0;
        questionNumb = 1;
        userScore = 0;
        showQuestions(questionCount);
        questionCounter(questionNumb);

        headerScore();
    }
})


let questionCount = 0;
let questionNumb = 1;
let userScore = 0;


const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    clickSound.play();
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    } else {
        quizOver.play();
        showResultBox();
    }
}


const optionList = document.querySelector('.option-list');

/** 
 * This function shows the questions */
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

/** 
 * This function checks if the user has selected the correct answer, 
 * otherwise shows the correct answer
 */
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
        correctSound.play();
        answer.classList.add('correct');
        userScore++;
        headerScore();
    } else {
        incorrectSound.play();
        answer.classList.add('incorrect');

        // if user selected answer is incorrect answer, selects auto correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');

            }
        }
    }

    // if user has selected an option, disable all other options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}


/** 
 * This function shows the result of the score */
function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    let progressStartValue = 0;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 10;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#0086D2 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed)
}