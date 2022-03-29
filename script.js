var websiteAge;
console.log(websiteAge);
const currentDate = new Date()/1000 | 0;
console.log(currentDate);
const apiUrl = "https://api.farmsense.net/v1/moonphases/?d=" + currentDate;
console.log(apiUrl);


const moonPhaseEl = document.querySelector('.moonStatus')

const moon = document.getElementsByClassName('moonPhases');
// console.log(moon[0].children[1].children[6].children[6].outerHTML);
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

                    // var highlight = "0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"
                    // if (data[0].Phase === "3rd Quarter") {
                        
                    //     moon[0].children[1].children[0].children[6].outerHTML = `<feColorMatrix id="moonOne" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "Waning Gibbous") {
                
                    //     moon[0].children[1].children[5].children[6].outerHTML = `<feColorMatrix id="moonTwo" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "Full Moon") {
                
                    //     moon[0].children[1].children[1].children[6].outerHTML = `<feColorMatrix id="moonThree" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "Waxing Gibbous") {
                
                    //     moon[0].children[1].children[7].children[6].outerHTML = `<feColorMatrix id="moonSix" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "1st Quarter") {
                
                    //     moon[0].children[1].children[2].children[6].outerHTML = `<feColorMatrix id="moonFive" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "Waxing Crescent") {
                
                    //     moon[0].children[1].children[6].children[6].outerHTML = `<feColorMatrix id="moonFour" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "New Moon") {
                
                    //     moon[0].children[1].children[3].children[6].outerHTML = `<feColorMatrix id="moonSeven" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // } else if (data[0].Phase === "Waning Crescent") {
                
                    //     moon[0].children[1].children[4].children[6].outerHTML = `<feColorMatrix id="moonEight" type="matrix" values="0 0 0 0 0 0 0 0 0 10 0 0 0 10 0 0 0 0 0.25 0"></feColorMatrix>`      

                    // }

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
const order = document.querySelector('.orderSolar');
order.classList.add('orderHover1')
function ageDegree(age) {
    var x = 360 * age;
    var y = 29.5;

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);

    var a = 360 * day;
    var b = 365;

    var moonDegree = x/y;
    var earthDegree = a/b;
 
    var mercuryDegree = (earthDegree * 1.60738255033557) / 0.3870481927710843;
    var venusDegree = (earthDegree * 1.174496644295302) / 0.7233218588640275;
    var marsDegree = (earthDegree * 0.8087248322147651) / 1.523235800344234;
    var jupiterDegree = (earthDegree * 0.4395973154362416) / 5.204388984509466; 
    var saturnDegree = (earthDegree * 0.325503355704698) / 9.582616179001721;
    var uranusDegree = (earthDegree * 0.2281879194630872) / 19.19104991394148;
    var neptuneDegree = (earthDegree * 0.1812080536912752) / 30.04518072289157;
    var plutoDegree = (earthDegree * 0.1567114093959732) / 39.80206540447504;
    const dice = document.querySelector('.randomizeSolar');

    dice.addEventListener('click', () => {
        var earthDegree = Math.floor(Math.random() * 361) + (a/b);
        var mercuryDegree = Math.floor(Math.random() * 361) + (earthDegree * 1.60738255033557) / 0.3870481927710843;
        var venusDegree = Math.floor(Math.random() * 361) + (earthDegree * 1.174496644295302) / 0.7233218588640275;
        var marsDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.8087248322147651) / 1.523235800344234;
        var jupiterDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.4395973154362416) / 5.204388984509466; 
        var saturnDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.325503355704698) / 9.582616179001721;
        var uranusDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.2281879194630872) / 19.19104991394148;
        var neptuneDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.1812080536912752) / 30.04518072289157;
        var plutoDegree = Math.floor(Math.random() * 361) + (earthDegree * 0.1567114093959732) / 39.80206540447504;

        document.querySelector('.earthRot').style.transition = 'transform 5s';
        document.querySelector('.mercuryRot').style.transition = 'transform 5s';
        document.querySelector('.venusRot').style.transition = 'transform 5s';
        document.querySelector('.marsRot').style.transition = 'transform 5s';
        document.querySelector('.jupiterRot').style.transition = 'transform 5s';
        document.querySelector('.saturnRot').style.transition = 'transform 5s';
        document.querySelector('.uranusRot').style.transition = 'transform 5s';
        document.querySelector('.neptuneRot').style.transition = 'transform 5s';
        document.querySelector('.plutoRot').style.transition = 'transform 5s';

        document.querySelector('.earthRot').style.transform = 'rotate(' + earthDegree + 'deg)';
        document.querySelector('.mercuryRot').style.transform = 'rotate(' + mercuryDegree + 'deg)';
        document.querySelector('.venusRot').style.transform = 'rotate(' + venusDegree + 'deg)';
        document.querySelector('.marsRot').style.transform = 'rotate(' + marsDegree + 'deg)';
        document.querySelector('.jupiterRot').style.transform = 'rotate(' + jupiterDegree + 'deg)';
        document.querySelector('.saturnRot').style.transform = 'rotate(' + saturnDegree + 'deg)';
        document.querySelector('.uranusRot').style.transform = 'rotate(' + uranusDegree + 'deg)';
        document.querySelector('.neptuneRot').style.transform = 'rotate(' + neptuneDegree + 'deg)';
        document.querySelector('.plutoRot').style.transform = 'rotate(' + plutoDegree + 'deg)';
    });
    
    order.addEventListener('click', () => {
        // order.style = 'transform: rotate(' + rot + 'deg)';

        var earthDegree = a/b;
        var mercuryDegree = (earthDegree * 1.60738255033557) / 0.3870481927710843;
        var venusDegree = (earthDegree * 1.174496644295302) / 0.7233218588640275;
        var marsDegree = (earthDegree * 0.8087248322147651) / 1.523235800344234;
        var jupiterDegree = (earthDegree * 0.4395973154362416) / 5.204388984509466; 
        var saturnDegree = (earthDegree * 0.325503355704698) / 9.582616179001721;
        var uranusDegree = (earthDegree * 0.2281879194630872) / 19.19104991394148;
        var neptuneDegree = (earthDegree * 0.1812080536912752) / 30.04518072289157;
        var plutoDegree = (earthDegree * 0.1567114093959732) / 39.80206540447504;

        document.querySelector('.earthRot').style.transition = 'transform 5s';
        document.querySelector('.mercuryRot').style.transition = 'transform 5s';
        document.querySelector('.venusRot').style.transition = 'transform 5s';
        document.querySelector('.marsRot').style.transition = 'transform 5s';
        document.querySelector('.jupiterRot').style.transition = 'transform 5s';
        document.querySelector('.saturnRot').style.transition = 'transform 5s';
        document.querySelector('.uranusRot').style.transition = 'transform 5s';
        document.querySelector('.neptuneRot').style.transition = 'transform 5s';
        document.querySelector('.plutoRot').style.transition = 'transform 5s';

        document.querySelector('.earthRot').style.transform = 'rotate(' + earthDegree + 'deg)';
        document.querySelector('.mercuryRot').style.transform = 'rotate(' + mercuryDegree + 'deg)';
        document.querySelector('.venusRot').style.transform = 'rotate(' + venusDegree + 'deg)';
        document.querySelector('.marsRot').style.transform = 'rotate(' + marsDegree + 'deg)';
        document.querySelector('.jupiterRot').style.transform = 'rotate(' + jupiterDegree + 'deg)';
        document.querySelector('.saturnRot').style.transform = 'rotate(' + saturnDegree + 'deg)';
        document.querySelector('.uranusRot').style.transform = 'rotate(' + uranusDegree + 'deg)';
        document.querySelector('.neptuneRot').style.transform = 'rotate(' + neptuneDegree + 'deg)';
        document.querySelector('.plutoRot').style.transform = 'rotate(' + plutoDegree + 'deg)';
    });

    document.querySelector('.moonWheel').style.transform = 'rotate(' + moonDegree + 'deg)';
    document.querySelector('.innerWheel').style.transform = 'rotate(' + moonDegree + 'deg)';
    document.querySelector('.moonRot').style.transform = 'rotate(' + moonDegree + 'deg)';
    document.querySelector('.earthRot').style.transform = 'rotate(' + earthDegree + 'deg)';
    document.querySelector('.earthRing').style.transform = 'rotate(-' + earthDegree + 'deg)';

    document.querySelector('.earthRot').style.transition = 'transform 5s';
    document.querySelector('.mercuryRot').style.transition = 'transform 5s';
    document.querySelector('.venusRot').style.transition = 'transform 5s';
    document.querySelector('.marsRot').style.transition = 'transform 5s';
    document.querySelector('.jupiterRot').style.transition = 'transform 5s';
    document.querySelector('.saturnRot').style.transition = 'transform 5s';
    document.querySelector('.uranusRot').style.transition = 'transform 5s';
    document.querySelector('.neptuneRot').style.transition = 'transform 5s';
    document.querySelector('.plutoRot').style.transition = 'transform 5s';

    document.querySelector('.mercuryRot').style.transform = 'rotate(' + mercuryDegree + 'deg)';
    document.querySelector('.venusRot').style.transform = 'rotate(' + venusDegree + 'deg)';
    document.querySelector('.marsRot').style.transform = 'rotate(' + marsDegree + 'deg)';
    document.querySelector('.jupiterRot').style.transform = 'rotate(' + jupiterDegree + 'deg)';
    document.querySelector('.saturnRot').style.transform = 'rotate(' + saturnDegree + 'deg)';
    document.querySelector('.uranusRot').style.transform = 'rotate(' + uranusDegree + 'deg)';
    document.querySelector('.neptuneRot').style.transform = 'rotate(' + neptuneDegree + 'deg)';
    document.querySelector('.plutoRot').style.transform = 'rotate(' + plutoDegree + 'deg)';


    console.log(moonDegree)
    const outerMoon = document.querySelector('.outerMoon');
    if (moonDegree > 337.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon1.png')";
    } else if (moonDegree < 22.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon1.png')";
    } else if (22.5 < moonDegree && moonDegree < 67.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon2.png')";
    } else if (67.5 < moonDegree && moonDegree  < 112.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon3.png')";
    } else if (112.5 < moonDegree && moonDegree < 157.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon4.png')";
    } else if (157.5 < moonDegree && moonDegree < 202.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon5.png')";
    } else if (202.5 < moonDegree && moonDegree < 247.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon6.png')";
    } else if (247.5 < moonDegree && moonDegree < 292.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon7.png')";
    } else if (292.5 < moonDegree && moonDegree < 337.5) {
        outerMoon.style.backgroundImage = "url('https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Images/moon8.png')";
    } else {
        return;
    }
}





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



