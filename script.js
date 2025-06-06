// Background Slideshow
let bgCurrent = 0;
let bgSlides;

// Foreground Slideshow (optional)
let fgIndex = 0;
let fgSlides;

// When GIF buttons become visible (after 1 second)
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Show the buttons container
    const buttons = document.querySelector('.buttons');
    if (buttons) buttons.classList.add('visible');

    // Show the gif button if it exists
    const gifBtn = document.querySelector('.gif-button');
    if (gifBtn) {
      gifBtn.classList.remove('hidden');
      gifBtn.classList.add('visible');
    }
  }, 1000); // after 1 second delay
});

// Change background image every 2 seconds
function nextBgSlide() {
  bgSlides.forEach(slide => slide.classList.remove('active'));
  bgCurrent = (bgCurrent + 1) % bgSlides.length; // update index first
  bgSlides[bgCurrent].classList.add('active');
}

// Change foreground image every 2 seconds (optional)
function showFgSlides() {
  fgSlides.forEach(slide => slide.classList.remove('show'));
  fgIndex = (fgIndex + 1) % fgSlides.length; // update index first
  fgSlides[fgIndex].classList.add('show');
}

// Initialize slideshows on window load
window.onload = () => {
  bgSlides = document.querySelectorAll('.bg-slide');
  fgSlides = document.querySelectorAll('.slide-image'); // optional, use if you have these elements

  if (bgSlides.length > 0) {
    bgSlides[0].classList.add('active');
    setInterval(nextBgSlide, 2000);
  }

  if (fgSlides.length > 0) {
    fgSlides[0].classList.add('show');
    setInterval(showFgSlides, 2000);
  }
};

// Show/hide galleries and hide buttons on click (assuming you have these galleries and back buttons in your HTML)
function showPaid() {
  const paidGallery = document.getElementById('paid-gallery');
  const freeGallery = document.getElementById('free-gallery');
  const paidBack = document.getElementById('paid-back');
  const freeBack = document.getElementById('free-back');
  const buttons = document.querySelector('.buttons');

  if (paidGallery && freeGallery && paidBack && freeBack && buttons) {
    paidGallery.classList.remove('hidden');
    freeGallery.classList.add('hidden');
    paidBack.classList.remove('hidden');
    freeBack.classList.add('hidden');
    buttons.classList.add('hidden-buttons');
  }
}

function showFree() {
  const paidGallery = document.getElementById('paid-gallery');
  const freeGallery = document.getElementById('free-gallery');
  const paidBack = document.getElementById('paid-back');
  const freeBack = document.getElementById('free-back');
  const buttons = document.querySelector('.buttons');

  if (paidGallery && freeGallery && paidBack && freeBack && buttons) {
    freeGallery.classList.remove('hidden');
    paidGallery.classList.add('hidden');
    freeBack.classList.remove('hidden');
    paidBack.classList.add('hidden');
    buttons.classList.add('hidden-buttons');
  }
}

function goBack() {
  const paidGallery = document.getElementById('paid-gallery');
  const freeGallery = document.getElementById('free-gallery');
  const paidBack = document.getElementById('paid-back');
  const freeBack = document.getElementById('free-back');
  const buttons = document.querySelector('.buttons');

  if (paidGallery && freeGallery && paidBack && freeBack && buttons) {
    paidGallery.classList.add('hidden');
    freeGallery.classList.add('hidden');
    paidBack.classList.add('hidden');
    freeBack.classList.add('hidden');
    buttons.classList.remove('hidden-buttons');
  }
}
