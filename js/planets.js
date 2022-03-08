console.log("hello world");

const nasaAPIKey = "jlzGqnF4dgyAGALdFxCrzt8FKZIF8Wbf8Ghso5ll";
const nasaIODLink = "https://api.nasa.gov/planetary/apod?count=50&api_key="

const SUN = document.querySelector('.Sun');
const MERCURY = document.querySelector('.Mercury');
const VENUS = document.querySelector('.Venus');
const EARTH = document.querySelector('.Earth');
const MOON = document.querySelector('.Moon');
const MARS = document.querySelector('.Mars');
const JUPITER = document.querySelector('.Jupiter');
const SATURN = document.querySelector('.Saturn');
const URANUS = document.querySelector('.Uranus');
const NEPTUNE = document.querySelector('.Neptune');
const PLUTO = document.querySelector('.Pluto');

const PLANET = document.querySelectorAll('.planet');

const planetName = document.querySelector('.planetName');
const planetDesc = document.querySelector('.planetDescSection');
const planetImage = document.querySelector('.planetImage');


// Planet Descriptions

const sunDesc = 'The Sun is hot';
const mercuryDesc = 'Mecury is a planet';
const venusDesc = 'Venus is a planet';
const earthDesc = 'Earth is a planet';
const moonDesc = 'Moon is not a planet';
const marsDesc = 'Mars is a planet';
const jupiterDesc = 'Jupiter is a planet';
const saturnDesc = 'Saturn is a planet';
const uranusDesc = 'Uranus is a planet';
const neptuneDesc = 'Neptune is a planet';
const plutoDesc = 'Pluto is not a planet :(';

planetDesc.textContent = "Click on a celestial body!";

for (i=0; i<PLANET.length; i++) {
    PLANET[i].addEventListener('click', (event) => {
            const currentPlanet = event.currentTarget.classList[1];
            planetName.textContent = event.currentTarget.classList[1];
            planetImage.style.backgroundImage = "url(https://ncooper00.github.io/Moon-Phase-Website/planet-images/" + event.currentTarget.classList[1] + ".png)";
            planetImage.style.aspectRatio = "1";
            planetImage.style.width = "25%";
            planetImage.style.borderRadius = "50%";
            if (currentPlanet === "Sun") {
                planetDesc.textContent = sunDesc;
                planetImage.style.width = "35%";
            } else if (currentPlanet === "Mercury") {
                planetDesc.textContent = mercuryDesc;
            } else if (currentPlanet === "Venus") {
                planetDesc.textContent = venusDesc;
            } else if (currentPlanet === "Earth") {
                planetDesc.textContent = earthDesc;
            } else if (currentPlanet === "Moon") {
                planetDesc.textContent = moonDesc;
            } else if (currentPlanet === "Mars") {
                planetDesc.textContent = marsDesc;
            } else if (currentPlanet === "Jupiter") {
                planetDesc.textContent = jupiterDesc;
            } else if (currentPlanet === "Saturn") {
                planetDesc.textContent = saturnDesc;
                planetImage.style.aspectRatio = "2";
                planetImage.style.borderRadius = "0%";
                planetImage.style.width = "35%";
            } else if (currentPlanet === "Uranus") {
                planetDesc.textContent = uranusDesc;
            } else if (currentPlanet === "Neptune") {
                planetDesc.textContent = neptuneDesc;
            } else if (currentPlanet === "Pluto") {
                planetDesc.textContent = plutoDesc;
            } else {
                planetDesc.textContent = "Click on a celestial body!";
            }
    });
}

const IOD = document.querySelector('.IOD');
var currentIMGNum = 0;

var imgTitle = document.querySelector('.imageTitle');

const descSection = document.querySelector('.imageDescSection');
const descArrow = document.querySelector('.descArrow');
const imgDesc = document.querySelector('.imageDesc');

fetch(nasaIODLink+nasaAPIKey)
.then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            imageData = data;
            IOD.setAttribute('src', imageData[currentIMGNum].hdurl);
            imgTitle.textContent = imageData[currentIMGNum].title;
            imgDesc.textContent = imageData[currentIMGNum].explanation;
            console.log(imageData);
            console.log(imageData[0].hdurl);
        });
    } else {
        alert("Error: " + response.statusText);
    }
})
.catch(function (error) {
    alert("Could not load image.");
});

descArrow.addEventListener('click', () => {
    var arrowStatus = descArrow.getAttribute('aria-enabled');
    if (arrowStatus === "false") {
        descArrow.setAttribute('aria-enabled', true);
        imgDesc.setAttribute('data-visible', true);
        imgDesc.style.marginBottom = "0%";
    } else {
        descArrow.setAttribute('aria-enabled', false);
        imgDesc.setAttribute('data-visible', false);
        imgDesc.style.marginBottom = "-100%";
    }
})


const prevImg = document.querySelector('.leftArrow');
const nextImg = document.querySelector('.rightArrow');
prevImg.addEventListener('click', () => {
    if (currentIMGNum === 0) {
        currentIMGNum = 49;
        currentIMGNum--;
        IOD.setAttribute('src', imageData[currentIMGNum].hdurl);
        imgTitle.textContent = imageData[currentIMGNum].title;
        imgDesc.textContent = imageData[currentIMGNum].explanation;
    } else {
        currentIMGNum--;
        IOD.setAttribute('src', imageData[currentIMGNum].hdurl);
        imgTitle.textContent = imageData[currentIMGNum].title;
        imgDesc.textContent = imageData[currentIMGNum].explanation;
    }
    imgDesc.style.marginBottom = "-100%";
})
nextImg.addEventListener('click', () => {
    if (currentIMGNum === 49) {
        currentIMGNum = 0;
        currentIMGNum++;
        IOD.setAttribute('src', imageData[currentIMGNum].hdurl);
        imgTitle.textContent = imageData[currentIMGNum].title;
        imgDesc.textContent = imageData[currentIMGNum].explanation;
    } else {
        currentIMGNum++;
        IOD.setAttribute('src', imageData[currentIMGNum].hdurl);
        imgTitle.textContent = imageData[currentIMGNum].title;
        imgDesc.textContent = imageData[currentIMGNum].explanation;
    }
    imgDesc.style.marginBottom = "-100%";
})