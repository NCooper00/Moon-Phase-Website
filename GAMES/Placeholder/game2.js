
// let div1 = document.getElementById('player').getBoundingClientRect();
// let div1Top = div1.top;
// let div1Left = div1.left;
// let div1Right = div1.right
// let div1Bottom = div1.bottom

// let div2 = document.getElementById('asteroid').getBoundingClientRect();
// let div2Top = div2.top;
// let div2Left = div2.left;
// let div2Right = div2.right
// let div2Bottom = div2.bottom

// var horizontalMatch;
// var vertialMatch;

// if ((div2Top > div1Top && div2Top < div1Bottom)||(div2Bottom > div1Top && div2Bottom < div1Bottom)) {
//   let verticalMatch = true
// } else{
//   let verticalMatch = false
// }

// if ((div2Right > div1Left && div2Right < div1Right)||(div2Left < div1Right && div2Left > div1Left)) {
//   let horizontalMatch = true
// } else {
//   let horizontalMatch = false
// }

// if (horizontalMatch && vertialMatch){
//   let intersect = true
// } else {
//   let intersect = false
// }

let d1 = document.getElementById('player').getBoundingClientRect();
let d2 = document.getElementById('asteroid').getBoundingClientRect();

function touching(div1,div2){
    let ox = Math.abs(d1.x - d2.x) < (d1.x < d2.x ? d2.width : d1.width);
    let oy = Math.abs(d1.y - d2.y) < (d1.y < d2.y ? d2.height : d1.height);
    return ox && oy;
}

var t = touching(d1,d2)


// Make the DIV element draggable:
dragElement(document.querySelector(".player"));
dragElement(document.querySelector(".asteroid"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}









var highScores = JSON.parse(localStorage.getItem('scores'));

var hit;
var miss;

const start = document.querySelector('.start')

start.addEventListener('click', () => {

});


const gameArea = document.querySelector('.gameArea');
gameArea.addEventListener('click', (event) => {

});


function updateSCORE(score) {

}



function startTimer() {

}



function gameOVER() {
    gameOver.setAttribute('aria-enabled', true);
    GOScore.textContent = "Your Score Was: " + hiddenScore;
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