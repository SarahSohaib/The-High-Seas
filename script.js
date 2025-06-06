// Show/Hide Paid & Free Sections
function showPaid() {
  document.getElementById('paid-section').style.display = 'block';
  document.getElementById('free-section').style.display = 'none';
}

function showFree() {
  document.getElementById('free-section').style.display = 'block';
  document.getElementById('paid-section').style.display = 'none';
}

// Background Slideshow
let bgCurrent = 0;
let bgSlides;

// Foreground Slideshow (optional)
let fgIndex = 0;
let fgSlides;

// Change background image every 7 seconds
function nextBgSlide() {
  bgSlides.forEach(slide => slide.classList.remove('active'));
  bgSlides[bgCurrent].classList.add('active');
  bgCurrent = (bgCurrent + 1) % bgSlides.length;
}

// Change foreground image every 7 seconds
function showFgSlides() {
  fgSlides.forEach(slide => slide.classList.remove('show'));
  fgSlides[fgIndex].classList.add('show');
  fgIndex = (fgIndex + 1) % fgSlides.length;
}

// Initialize on window load
window.onload = () => {
  // Select all background and foreground slides
  bgSlides = document.querySelectorAll('.bg-slide');
  fgSlides = document.querySelectorAll('.slide-image');

  // Init background slideshow
  if (bgSlides.length > 0) {
    bgSlides[0].classList.add('active');
    setInterval(nextBgSlide, 3000); // ⏱ every 1 seconds
  }

  // Init foreground slideshow (if any)
  if (fgSlides.length > 0) {
    fgSlides[0].classList.add('show');
    setInterval(showFgSlides, 3000); // ⏱ every 1 seconds
  }
};
