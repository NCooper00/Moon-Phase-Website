const currentDate = new Date()/1000 | 0;
console.log(currentDate);
const apiUrl = "https://api.farmsense.net/v1/moonphases/?d=" + currentDate;
console.log(apiUrl);


const moonPhaseEl = document.querySelector('.moonStatus')

const moon = document.getElementsByClassName('moonPhases');
console.log(moon[0].children[1].children[6].children[6].outerHTML);
console.log(moon);
// console.log(moonSix);
function getMoonData() {
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    // console.log(data[0].Age)

                    ageDegree(data[0].Age);
                    
                    moonPhaseEl.textContent = "Current Moon Phase: " + data[0].Phase;

                    var highlight = "0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"
                    if (data[0].Phase === "3rd Quarter") {
                        
                        moon[0].children[1].children[0].children[6].outerHTML = `<feColorMatrix id="moonOne" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "Waning Gibbous") {
                
                        moon[0].children[1].children[5].children[6].outerHTML = `<feColorMatrix id="moonTwo" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "Full Moon") {
                
                        moon[0].children[1].children[1].children[6].outerHTML = `<feColorMatrix id="moonThree" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "Waxing Gibbous") {
                
                        moon[0].children[1].children[7].children[6].outerHTML = `<feColorMatrix id="moonSix" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "1st Quarter") {
                
                        moon[0].children[1].children[2].children[6].outerHTML = `<feColorMatrix id="moonFive" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "Waxing Crescent") {
                
                        moon[0].children[1].children[6].children[6].outerHTML = `<feColorMatrix id="moonFour" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "New Moon") {
                
                        moon[0].children[1].children[3].children[6].outerHTML = `<feColorMatrix id="moonSeven" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    } else if (data[0].Phase === "Waning Crescent") {
                
                        moon[0].children[1].children[4].children[6].outerHTML = `<feColorMatrix id="moonEight" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    }

                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Did not get a response");
        });
};
getMoonData();

function ageDegree(age) {
    var x = 360 * age;
    var y = 29.5;

    const moonDegree = x/y;

    document.querySelector('.moonWheel').style.transform = 'rotate(' + moonDegree + 'deg)';
}


(function () {

    var parallax = document.querySelectorAll("body"),
        speed = 0.7;

    window.onscroll = function () {

        [].slice.call(parallax).forEach(function (el, i) {
            const home = document.querySelector('.home');
            const merch = document.querySelector('.merch');
            if ((window.innerHeight - window.pageYOffset) >= document.body.offsetHeight - 25) {
                console.log("top");
                home.setAttribute('aria-expanded', true);
            } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 600) {
                merch.setAttribute('aria-expanded', true);
            } else {
                home.setAttribute('aria-expanded', false);
                merch.setAttribute('aria-expanded', false);
            }

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };
})();


const optionMenu = document.querySelector('.optionMenu');
const options = document.querySelector('.options');
const body = document.querySelector('body');

options.addEventListener("click", () => {
    const menuStatus = optionMenu.getAttribute('aria-expanded');
    const optionStatus = options.getAttribute('aria-expanded');
    const bodyStatus = body.getAttribute('aria-expanded');

    if (menuStatus === "false") {
        optionMenu.setAttribute('aria-expanded', true)
    } else {
        optionMenu.setAttribute('aria-expanded', false)
    };
    if (optionStatus === "true") {
        options.setAttribute('aria-expanded', false)
        body.setAttribute('aria-expanded', true)
    } else {
        options.setAttribute('aria-expanded', true)
    }

});

const hamburger = document.querySelector('#check');

hamburger.addEventListener('click', () => {
    const hamStatus = hamburger.getAttribute('aria-expanded');
    if (hamStatus === "false") {
        optionMenu.setAttribute('aria-expanded', false);
        options.setAttribute('aria-expanded', false);
    }
});

const music = document.querySelector('.musicBtn');
const musicIcon = document.querySelector('.musicIcon');
const musicBox = document.querySelector('.musicBox');

music.addEventListener('click', () => {
    const musicStatus = music.getAttribute('aria-expanded');
    if (musicStatus === "false") {
        music.setAttribute('aria-expanded', true);
        musicIcon.setAttribute('aria-expanded', true);
        musicBox.setAttribute('aria-expanded', true);
    } else {
        music.setAttribute('aria-expanded', false);
        musicIcon.setAttribute('aria-expanded', false);
        musicBox.setAttribute('aria-expanded', false);
    }
});

musicIcon.addEventListener('click', () => {
    const musicStatus = musicIcon.getAttribute('aria-expanded');
    if (musicStatus === "false") {
        music.setAttribute('aria-expanded', true);
        musicIcon.setAttribute('aria-expanded', true);
        musicBox.setAttribute('aria-expanded', true);
    } else {
        music.setAttribute('aria-expanded', false);
        musicIcon.setAttribute('aria-expanded', false);
        musicBox.setAttribute('aria-expanded', false);
    }
});

var currentMusic;
const playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click', () => {
    const visibility = playBtn.getAttribute('data-visible');
    if (visibility === "true") {
        playBtn.setAttribute('data-visible', false)
        currentMusic.pause();
    } else {
        playBtn.setAttribute('data-visible', true)
        currentMusic = new Audio("/music-lib/spacey/Alley-Cat-Geographer.mp3");
        currentMusic.muted = false;
        currentMusic.play();
    }
});