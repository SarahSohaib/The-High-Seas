// Background Slideshow
let bgCurrent = 0;
let bgSlides;

// Foreground Slideshow (optional)
let fgIndex = 0;
let fgSlides;

//when gifs will be visible
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.buttons').classList.add('visible');
  }, 1000); // 2000ms = 2 seconds
});

// Change background image every 3 seconds
function nextBgSlide() {
  bgSlides.forEach(slide => slide.classList.remove('active'));
  bgSlides[bgCurrent].classList.add('active');
  bgCurrent = (bgCurrent + 1) % bgSlides.length;
}

// Change foreground image every 3 seconds (optional)
function showFgSlides() {
  fgSlides.forEach(slide => slide.classList.remove('show'));
  fgSlides[fgIndex].classList.add('show');
  fgIndex = (fgIndex + 1) % fgSlides.length;
}

// Initialize on window load
window.onload = () => {
  bgSlides = document.querySelectorAll('.bg-slide');
  fgSlides = document.querySelectorAll('.slide-image');

  if (bgSlides.length > 0) {
    bgSlides[0].classList.add('active');
    setInterval(nextBgSlide, 3000);
  }

  if (fgSlides.length > 0) {
    fgSlides[0].classList.add('show');
    setInterval(showFgSlides, 3000);
  }
};

// Show/hide galleries and hide buttons on click
function showPaid() {
  document.getElementById('paid-gallery').classList.remove('hidden');
  document.getElementById('free-gallery').classList.add('hidden');
  document.getElementById('paid-back').classList.remove('hidden');
  document.getElementById('free-back').classList.add('hidden');
  document.querySelector('.buttons').classList.add('hidden-buttons');
}

function showFree() {
  document.getElementById('free-gallery').classList.remove('hidden');
  document.getElementById('paid-gallery').classList.add('hidden');
  document.getElementById('free-back').classList.remove('hidden');
  document.getElementById('paid-back').classList.add('hidden');
  document.querySelector('.buttons').classList.add('hidden-buttons');
}

function goBack() {
  document.getElementById('paid-gallery').classList.add('hidden');
  document.getElementById('free-gallery').classList.add('hidden');
  document.getElementById('paid-back').classList.add('hidden');
  document.getElementById('free-back').classList.add('hidden');
  document.querySelector('.buttons').classList.remove('hidden-buttons');
}
