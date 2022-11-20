var slides = document.querySelectorAll('#showContainer .imageContainer');
var currentSlide = 0;
var interval = 8000;
var slideInterval = setInterval(nextSlide,interval);

function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'imageContainer';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'imageContainer imageShow';
}

var playing = true;
var pauseButton = document.getElementById('pause');
function pauseSlideshow() {
    pauseButton.innerHTML = '&#9658;';
    pauseButton.style.borderColor = '#FF0000'
    playing = false;
    clearInterval(slideInterval);
}
function playSlideshow() {
    pauseButton.innerHTML = '&#10073;&#10073;';
    pauseButton.style.borderColor = '#008000'
    playing = true;
    slideInterval = setInterval(nextSlide,interval);
}
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

var next = document.getElementById('next');
var previous = document.getElementById('prev');
next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};