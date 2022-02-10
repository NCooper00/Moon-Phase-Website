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
                    console.log(data[0].Phase)
                    
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


(function () {

    var parallax = document.querySelectorAll("body"),
        speed = 0.7;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };
})();