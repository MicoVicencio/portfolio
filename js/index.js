// Focus outline only for keyboard users
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

// Back-to-top button visibility control
const backToTopButton = document.querySelector(".back-to-top");

const alterStyles = (visible) => {
  backToTopButton.style.visibility = visible ? "visible" : "hidden";
  backToTopButton.style.opacity = visible ? 1 : 0;
  backToTopButton.style.transform = visible ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  const isBackToTopVisible = window.scrollY > 700;
  alterStyles(isBackToTopVisible);
});


// Modal Image Display
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeModal = document.querySelector('.close');

// Open modal on image click for both slider and grid images
document.querySelectorAll('.slider-row .slide img, .grid-item img').forEach(img => {
  img.addEventListener('click', (e) => {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
  });
});

// Close modal on "x" click
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
