let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function mudarSlide(direcao) {
  currentIndex = (currentIndex + direcao + totalSlides) % totalSlides;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}
