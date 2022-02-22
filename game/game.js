var timeLeft = 60;

// const highSCORE = document.querySelector('.highScores');
var highScores = JSON.parse(localStorage.getItem('scores'));
// Game Sounds
var hit;
var miss;

const start = document.querySelector('.start');
const moon = document.querySelector('.moon');
const timer = document.querySelector('.timer');

const gameOver = document.querySelector('.gameOverBlur');

var scoreInvis;

start.addEventListener('click', () => {
    var randomY = Math.floor(Math.random() * 101) + "%"
    var randomX = Math.floor(Math.random() * 101) + "%"
    moon.style.display = "block";
    moon.style.top = randomY;
    moon.style.left = randomX;
    var startStatus = start.getAttribute('aria-enabled');
    if (startStatus === "false") {
        timeLeft = 60;
        scoreInvis = 0;
        var GAMESCORERESET = updateSCORE(0);
        GAMESCORERESET;
        startTimer();
        start.setAttribute('aria-enabled', true);
        start.textContent = 'End Game';
    } else {
        start.setAttribute('aria-enabled', false);
        start.textContent = 'Start Game';
        moon.style.display = "none";
        gameOVER();
    }
});

const healthLeft = document.querySelector('.healthLeft');
const healthRight = document.querySelector('.healthRight');
moon.addEventListener('click', () => {
    // healthLeft.style.animation = "healthLeftTwo 5s infinite";
    // healthRight.style.animation = "healthRightTwo 5s infinite";
    // healthLeft.style.animation = "healthLeftOne 5s infinite";
    // healthRight.style.animation = "healthRightOne 5s infinite";
});

const gameArea = document.querySelector('.gameArea');
gameArea.addEventListener('click', (event) => {
    var startStatus = start.getAttribute('aria-enabled');
    var clickCheck = event.target.classList.value;
    if (clickCheck === "moon") {
        if (startStatus === "false") {
            return;
        } else {
            hit = new Audio("../sound-effects/Game-Sounds/circle-hit.wav");
            hit.muted = false;
            hit.volume = .15
            hit.play();
            var currentSCORE = scoreInvis;
            currentSCORE++;
            scoreInvis = currentSCORE;
            var GAMESCOREUPDATE = updateSCORE(currentSCORE)
            GAMESCOREUPDATE;
            var randomY = Math.floor(Math.random() * 91) + "%";
            var randomX = Math.floor(Math.random() * 91) + "%";
            moon.style.top = randomY;
            moon.style.left = randomX;
        }
    } else if (clickCheck === "gameArea") {
        if (startStatus === "true") {
            if (gameOver.getAttribute('aria-enabled') === "false") {
                miss = new Audio("../sound-effects/Game-Sounds/circle-miss.wav");
                miss.muted = false;
                miss.volume = .5
                miss.play();
                var currentSCORE = scoreInvis;
                currentSCORE--;
                scoreInvis = currentSCORE;
                var GAMESCOREUPDATE = updateSCORE(currentSCORE)
                GAMESCOREUPDATE;
            } else {
                return;
            }
        } else {
            return;
        }
    }    
});


function updateSCORE(score) {
    const scoreboard = document.querySelector('.score');
    scoreboard.textContent = "Score: " + score;
}



function startTimer() {
    var gameTimer = setInterval(function() {
        if(timeLeft < 0){
            clearInterval(gameTimer);
            gameOVER();
        } else {
            if (timeLeft > 59) {
                timer.textContent = "Time Left: 1:00";
                timeLeft -= 1;
            } else if (timeLeft >= 10 && timeLeft < 60) {
                timer.textContent = "Time Left: 0:" + timeLeft;
                timeLeft -= 1;
            } else if (timeLeft < 10) {
                timer.textContent = "Time Left: 0:0" + timeLeft;
                timeLeft -= 1;
            } else if (timeLeft < 0) {
                timer.textContent = "Time Left: 0:00";
            } 
        } 
    }, 1000);
}

var GOScore = document.querySelector('.GOScore');
var newHigh = document.querySelector('.newHigh');

function gameOVER() {
    timeLeft = -1;
    var hiddenScore = scoreInvis;
    gameOver.setAttribute('aria-enabled', true);
    GOScore.textContent = "Your Score Was: " + hiddenScore;
    moon.style.display = "none";
    console.log(hiddenScore);
    console.log(highScores);
    const highSCORE = document.querySelector('.highScores');
    if (hiddenScore > highScores) {
        // refreshScore();
        localStorage.setItem("scores", JSON.stringify(hiddenScore));
        highSCORE.textContent = "High Score: " + hiddenScore;
        newHigh.textContent = "New High Score!";
    } else {
        newHigh.textContent = "";
    }
}

const GOReset = document.querySelector('.goInnerReset');

GOReset.addEventListener('click', () => {
    // reloadHighScore();
    gameOver.setAttribute('aria-enabled', false);
    start.setAttribute('aria-enabled', false);
    start.textContent = 'Start Game';
});



const Options = document.querySelector('.options');
const optionsMenu = document.querySelector('.optionsDim');

Options.addEventListener('click', () => {
    var opstatus = optionsMenu.getAttribute('data-visible');

    if (opstatus === "false") {
        optionsMenu.setAttribute('data-visible', true);
    } else {
        optionsMenu.setAttribute('data-visible', false);
    }
});

const highSCORE = document.querySelector('.highScores');
function setScore(){
    highSCORE.innerHTML = "High Score: " + highScores;
}


const dimOption = document.querySelector('.dimOption');
const dimPercent = document.querySelector('.percent');

dimOption.value = "50%";
dimPercent.style.left = "50%";
const brightness = document.querySelector('.backgroundBright');
brightness.style.opacity = dimOption.value + "%";
dimOption.addEventListener('click', () => {
    dimPercent.style.left = dimOption.value + "%";
    dimPercent.textContent = dimOption.value + "%";
    brightness.style.opacity = dimOption.value + "%";
});




// const string = document.querySelector('.string');
// const input = document.querySelector('.checkbox');
// input.value = "off"
// console.log(input.value)
// input.addEventListener('click', () => {
//     var stringStat = string.getAttribute('data-visible');
//     if (input.value === "off") {
//         input.value = "on";
//         string.setAttribute('data-visible', true);
//     } else {
//         input.value = "off";
//         string.setAttribute('data-visible', false);
//     }
// });


