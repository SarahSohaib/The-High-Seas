// Function to show the "Paid" streaming sites
function showPaid() {
  const paidSection = document.getElementById('paid-section');
  const freeSection = document.getElementById('free-section');

  paidSection.style.display = 'block';
  freeSection.style.display = 'none';
}

// Function to show the "Free" streaming sites
function showFree() {
  const paidSection = document.getElementById('paid-section');
  const freeSection = document.getElementById('free-section');

  freeSection.style.display = 'block';
  paidSection.style.display = 'none';
}