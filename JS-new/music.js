var currentPos = 0;
const source = document.querySelectorAll('source');


var audio = document.getElementById('player');

const spacey = "https://ncooper00.github.io/Moon-Phase-Website/ASSETS/Music-Library/";
const mp3 = ".mp3";

const allMusic = [
    song1 = "Alley Cat - Geographer",
    song2 = "Beside Me - Patrick Patrikios",
    song3 = "Black Mercury - South London HiFi",
    song4 = "Experience Nature Experience You - South London HiFi",
    song5 = "Future Proof - South London HiFi",
    song6 = "Juno In The Space Maze - Loopop",
    song7 = "Let It Happen - South London HiFi",
    song8 = "Mirror Mind - Bobby Richards",
    song9 = "Move Ya - Max Surla_Media Right Productions",
    song10 = "Muriel - Bobby Richards",
    song12 = "Night Time - Underbelly & Ty Mayer",
    song13 = "Nine Lives - Unicorn Heads",
    song14 = "Ocean View - Dyalla",
    song15 = "Rich in the 80s - DivKid",
    song16 = "Sign of the Vibration - South London HiFi",
    song17 = "Sombrero - Coyote Hearing",
    song18 = "Some Other Place - South London HiFi",
    song19 = "Space Racer - Bad Snacks",
    song20 = "Storm Chasers - Silent Partner",
    song21 = "Sun Machine One - Loopop",
    song22 = "Sunstroke - Geographer",
    song23 = "Contact High - RKVC",
    song24 = "Feeling's Not Mutual - Single Friend",
    song25 = "Lofi Mallet - Kwon",
    song26 = "Nilly Willy - Yung Logos",
    song27 = "Old Vienna - Endless Love",
    song28 = "Papov - Yung Logos",
    song29 = "Patience - Dyalla",
    song30 = "Stained Moonboots - NoMBe",
    song31 = "State Drive - VYEN",
    song32 = "Swells - Underbelly & Ty Mayer",
    song33 = "Treat Yourself - Dyalla",
    song34 = "Water Please - Text Me Records _ GrandBankss",
];

var mixedMusic = [];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    mixedMusic = array;
    // return array;
  }

const shuffleEl = document.querySelector('.shuffle');


shuffleEl.addEventListener('click', () => {
    const shuffleStatus = shuffleEl.getAttribute('aria-enabled');
    if (shuffleStatus === "false") {
        shuffleEl.setAttribute('aria-enabled', true);
        shuffle(allMusic);
        console.log(mixedMusic);
    } else {
        shuffleEl.setAttribute('aria-enabled', false);
    }
    shuffleStatus;
});

// var shuffledSongs = shuffle(allMusic);

//   source.forEach(element => {
//     for (var x=0; x<source.length; x++) {
//         source[x].setAttribute('src', spacey + allMusic[x] + mp3)
//     }
// });
// console.log(source[currentPos]);
// console.log(currentPos++);

// var sourcePos = 
// var currentMusic = source[currentPos].getAttribute('src');
// console.log(currentMusic);

audio.onended = ( () => {
    if (currentPos < allMusic.length - 1) {
        currentPos++;

        var currentMusic = source[currentPos].getAttribute('src');
        console.log(currentMusic);
        audioElement.setAttribute('src', currentMusic);
        audioElement.load();
        audioElement.play();
        // currentMusic = new Audio(currentMusic);
        // currentMusic.muted = false;
        // currentMusic.play();
    } else {
        alert("You listened to all the songs!");
        return;
    }
});

const music = document.querySelector('.musicBtn');
const musicIcon = document.querySelector('.musicIcon');
const musicBox = document.querySelector('.musicBox');

const moonSVG = document.querySelector('.moonSVG');

const musicStatus = music.getAttribute('aria-expanded');
if (musicStatus === "false") {
    moonSVG.style.top = '2.5%';
} else {
    moonSVG.style.top = '5%';
}

music.addEventListener('click', () => {
    const musicStatus = music.getAttribute('aria-expanded');
    if (musicStatus === "false") {
        moonSVG.style.top = '5%';
        music.setAttribute('aria-expanded', true);
        musicIcon.setAttribute('aria-expanded', true);
        musicBox.setAttribute('aria-expanded', true);
    } else {
        moonSVG.style.top = '2.5%';
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

const playBtn = document.querySelector('.playBtn');
const songScroll = document.querySelector('.song');
playBtn.addEventListener('click', () => {
    const visibility = playBtn.getAttribute('data-visible');
    // const musicSpot = userSpot;
    audioElement = audio;
    var currentMusic = source[currentPos].getAttribute('src');
    // audioElement.currentPos("userSpot")
    if (visibility === "true") {
        playBtn.setAttribute('data-visible', false)
        musicBox.setAttribute('data-visible', false)

        audioElement.pause();
    } else {
        playBtn.setAttribute('data-visible', true)
        musicBox.setAttribute('data-visible', true)
        if (mixedMusic.length !== 0) {
            

            // audio.onended = ( () => {
                if (currentPos < mixedMusic.length - 1) {
                    currentPos++;

                    // audioElement.pause();
            
                    playSource();

            function setSource(_callback) {
                source.forEach(element => {
                    for (var x=0; x<source.length; x++) {
                        source[x].setAttribute('src', spacey + mixedMusic[x] + mp3)
                    }
                });
                _callback();
            }

            function playSource() {
                setSource(function() {
                    audioElement.setAttribute('src', currentMusic);
                    audioElement.load();
                    audioElement.volume = .5;
                    audioElement.play();
                    console.log(mixedMusic[currentPos]);
                    songScroll.textContent = mixedMusic[currentPos];  
                })
            }

                } else {
                    alert("You listened to all the songs!");
                    // return;
                }
        } else {

            // audioElement.pause();

            playSource();

            function setSource(_callback) {
                source.forEach(element => {
                    for (var x=0; x<source.length; x++) {
                        source[x].setAttribute('src', spacey + allMusic[x] + mp3)
                    }
                });
                _callback();
            }

            function playSource() {
                setSource(function() {
                    audioElement.setAttribute('src', currentMusic);
                    audioElement.load();
                    audioElement.volume = .5;
                    audioElement.play();
                    console.log(allMusic[currentPos]);
                    songScroll.textContent = allMusic[currentPos];  
                })
            }    
        }
    }
});

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

previous.addEventListener('click', () => {
    audioElement.pause();
    currentPos--;
    audioElement.setAttribute('src', currentMusic);
    audioElement.load();
    audioElement.play();
    console.log(allMusic[currentPos]);
    songScroll.textContent = allMusic[currentPos];
});

next.addEventListener('click', () => {
    var currentMusic = source[currentPos].getAttribute('src');
    // audioElement.pause();
    currentPos++;
    const shuffleStatus = shuffleEl.getAttribute('aria-enabled');
        if (shuffleStatus === "true") {
            // var newShuffle = shuffle(allMusic);
            audioElement.pause();
            source.forEach(element => {
                    for (var x=0; x<source.length; x++) {
                        source[x].setAttribute('src', spacey + mixedMusic[x] + mp3)
                    }
                });
                audioElement.setAttribute('src', currentMusic);
                audioElement.load();
                audioElement.play();
                songScroll.textContent = allMusic[currentPos];
                console.log(currentMusic);
                console.log(newShuffle[currentPos])
        } else {
            source.forEach(element => {
                for (var x=0; x<source.length; x++) {
                    source[x].setAttribute('src', spacey + allMusic[x] + mp3)
                }
            });
            audioElement.setAttribute('src', currentMusic);
            audioElement.load();
            audioElement.play();
            console.log(allMusic[currentPos]);
            songScroll.textContent = allMusic[currentPos];
        }   
})