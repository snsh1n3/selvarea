let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-container img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

prev.addEventListener("click", () => showSlide(currentSlide - 1));
next.addEventListener("click", () => showSlide(currentSlide + 1));
