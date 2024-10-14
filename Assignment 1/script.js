let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0; // Go back to the first slide
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go to the last slide
  }

  document.querySelector('.slider-wrapper').style.transform = `translateX(-${slideIndex * 100}%)`;
}