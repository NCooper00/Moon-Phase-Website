const musicBoxSelect = document.querySelector('.musicBox');
const page1 = document.querySelector('.page1');
const page3 = document.querySelector('.page3');

const curSong = document.querySelector('.currentSong');

const page1Options = {
    rootMargin: "-450px 0px 0px 0px"
};


const page1Observer = new IntersectionObserver(function(entries, page1Observer) {
    entries.forEach(entry => {
        // console.log(entry.target);
        if(!entry.isIntersecting) {
            musicBoxSelect.classList.remove('musicMiddle')
            musicBoxSelect.classList.add('musicLeft')
        } else {
            musicBoxSelect.classList.remove('musicLeft')
            musicBoxSelect.classList.add('musicMiddle')
        }
    })
}, page1Options);

page1Observer.observe(page1);

// const page3Options = {
//     rootMargin: "600px 0px 0px 0px"
// };

// const page3Observer = new IntersectionObserver(function(entries, page3Observer) {
//     entries.forEach(entry => {
//         // console.log(entry.target);
//         if(!entry.isIntersecting) {
//             musicBoxSelect.classList.remove('musicBottom')
//         } else {
//             musicBoxSelect.classList.remove('musicLeft')
//             musicBoxSelect.classList.add('musicBottom')
//         }
//     })
// }, page3Options);

// page3Observer.observe(page3)

(function () {

    var parallax = document.querySelectorAll("body"),
        speed = 0.7;

    window.onscroll = function () {

        [].slice.call(parallax).forEach(function (el, i) {
            const home = document.querySelector('.home');
            const merch = document.querySelector('.merch');
            const solar = document.querySelector('.solar')
            if ((window.innerHeight - window.pageYOffset) >= document.body.offsetHeight - 250) {
                console.log("top");
                solar.setAttribute('aria-expanded', false);
                home.setAttribute('aria-expanded', true);
            } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 1700) {
                merch.setAttribute('aria-expanded', true);
                solar.setAttribute('aria-expanded', false);
                musicBoxSelect.classList.remove('musicLeft')
                musicBoxSelect.classList.remove('musicMiddle')
                musicBoxSelect.classList.add('musicBottom')
            } else {
                home.setAttribute('aria-expanded', false);
                merch.setAttribute('aria-expanded', false);
                solar.setAttribute('aria-expanded', true);
                musicBoxSelect.classList.remove('musicBottom')
                musicBoxSelect.classList.add('musicLeft')
            }

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;

        });
    };
})();