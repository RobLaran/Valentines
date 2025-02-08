let index = 0;
const slides = document.querySelectorAll(".card");
const totalSlides = slides.length;
const carousel = document.getElementById("cards");

const player = document.getElementById("player");
const volumeSlider = document.getElementById("volumeSlider");

// Set default volume to 50%
player.volume = 0.5;

function getSlideWidth() {
    return slides[0].offsetWidth + 70; // 20px is the gap
}

function updateCarousel() {
    let offset = -index * getSlideWidth(); 
    carousel.style.transform = `translateX(${offset}px)`;
}

function next() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

function prev() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}



function showMessage() {
    // array with texts to type in typewriter
    var dataText = [ "Dear laloves,", "my one and only honeybunch", "sugarplum",
         "love of my life", "my forever baby love", "and labs,",
        "itis watitis", "I love you,", "It's so sweet, knowing that you love me.",
        "I don't care how long it takes, as long as I'm with you.", "When we're apart and I'm missing you",
        "I close my eyes and all I see is you", "And the small things you do.", "You know I love you so",
        "I love you my medicine", "I wanna go with you, and only you, my boo", "Gusto kitang makasama buong gabi, nakahigang nakaharap sa mga bituin"
        ,"I will gladly break my heart for you 😘💝"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("p span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 15000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
}

const rose = document.getElementById("rose");

        document.addEventListener("mousemove", (e) => {
            rose.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });



// Toggle play/pause
function togglePlay() {
  let record = document.getElementById("record")

    if (player.paused) {
        player.play();
        record.style = "animation: record 5s linear infinite;"
    } else {
        player.pause();
        record.style = "animation: none;"
    }

}

// Change volume based on slider input
volumeSlider.addEventListener("input", function () {
    player.volume = volumeSlider.value;
});


showMessage();

function createHeart() {
  const heartsContainer = document.getElementById("hearts")
  const heart = document.createElement('div');
  heart.innerHTML = '❤';
  heart.classList.add('heart');
  heartsContainer.appendChild(heart);
  
  const size = Math.random() * 20 + 10 + 'px';
  heart.style.fontSize = size;
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);