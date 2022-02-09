const currentDate = new Date()/1000 | 0;
console.log(currentDate);
const apiUrl = "https://api.farmsense.net/v1/moonphases/?d=" + currentDate;
console.log(apiUrl);

function findDate() {

};

function getMoonData() {
    fetch(apiUrl)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
};

function renderMoon() {

}

getMoonData();