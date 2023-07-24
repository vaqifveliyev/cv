/* TYPEWRITER */ 

let sentences = ["Graphic Designer.", "Frontend Developer."];
let sentenceElement = document.getElementById("sentence");
let sentenceIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < sentences[sentenceIndex].length) {
    sentenceElement.innerHTML += sentences[sentenceIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(deleteText, 1000);
  }
}

function deleteText() {
  if (charIndex >= 0) {
    sentenceElement.innerHTML = sentences[sentenceIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(deleteText, 30);
  } else {
    sentenceIndex++;
    if (sentenceIndex >= sentences.length) {
      sentenceIndex = 0;
    }
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();

/* SKILLS */

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((progressBar) => {
        let progress = progressBar.querySelector(".progress");
        let percentage = parseInt(progressBar.getAttribute("data-progress"));
        let currentWidth = 0;
        let animationDuration = 100; 

        let animateProgressBar = () => {
            if (currentWidth < percentage) {
                currentWidth++;
                progress.style.width = currentWidth + "%";
                requestAnimationFrame(animateProgressBar);
            }
        };

        animateProgressBar();
    });
});

/* SPINNER */

document.addEventListener("DOMContentLoaded", function() {
  let spinner = document.getElementById("spinner");
  setTimeout(function() {
      spinner.style.display = "none";
  }, 1000); 
});

