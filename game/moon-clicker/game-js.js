var score = 0;

const MOONCOUNTER = document.querySelector('.score');

const MOON = document.querySelector('.moon');

MOON.addEventListener('click', () => {
    score++;
    console.log(score);

    MOONCOUNTER.textContent = "Moons: " + score;
});





var highScores = JSON.parse(localStorage.getItem('scores'));

var hit;
var miss;




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