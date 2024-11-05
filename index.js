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
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const sliderRows = document.querySelectorAll('.slider-row');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const closeModal = document.querySelector('.close');

// Duplicate each image to make the slider seamless
sliderRows.forEach(row => {
  const slides = Array.from(row.children);
  slides.forEach(slide => row.appendChild(slide.cloneNode(true)));
});

// Pause scrolling on hover
sliderRows.forEach(row => {
  row.addEventListener('mouseover', () => row.style.animationPlayState = 'paused');
  row.addEventListener('mouseout', () => row.style.animationPlayState = 'running');
});

// Open modal on image click
document.querySelectorAll('.slide img').forEach(img => {
  img.addEventListener('click', (e) => {
    modal.style.display = 'block';
    modalImg.src = e.target.src; // Set the modal image source to the clicked image source
  });
});

// Close modal when clicking on "x"
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside the image
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

