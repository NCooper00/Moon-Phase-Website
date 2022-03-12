var navClickSource = "./ASSETS/Sound-Effects/nav-click.mp3";
var navClick;

const navSound = document.querySelectorAll('.headerA');

for (i=0; i<navSound.length; i++) {
    navSound[i].addEventListener('click', () => {
        navClick = new Audio(navClickSource)
        navClick.muted = false;
        navClick.volume = .8;
        navClick.play();
    })
}

var randomClickSource = "./sound-effects/randomize-click.mp3";
var orderClickSource = "./sound-effects/order-click.mp3";

var randomClick;
var orderClick;

const randomSound = document.querySelector('.randomizeSolar');
const orderSound = document.querySelector('.orderSolar');

randomSound.addEventListener('click', () => {
    randomClick = new Audio(randomClickSource)
    randomClick.muted = false;
    randomClick.volume = .4;
    randomClick.play();
})

orderSound.addEventListener('click', () => {
    orderClick = new Audio(orderClickSource)
    orderClick.muted = false;
    orderClick.volume = .4;
    orderClick.play();
})

const planets = document.querySelectorAll('.planet');

var planetHoverSource = "./sound-effects/planet-hover.mp3";

var planetHover;

for (i=0; i<planets.length; i++) {
    planets[i].addEventListener('mouseover', () => {
        planetHover = new Audio(planetHoverSource)
        planetHover.muted = false;
        planetHover.volume = .2;
        planetHover.play();
    })
}