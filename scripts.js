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

// Abrir y cerrar ventana de búsqueda
document.getElementById("search-btn").addEventListener("click", function() {
  document.getElementById("search-modal").style.display = "block";
});
document.getElementById("close-search").addEventListener("click", function() {
  document.getElementById("search-modal").style.display = "none";
});

// Abrir y cerrar ventana de inicio de sesión
document.getElementById("user-btn").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "block";
});
document.getElementById("close-login").addEventListener("click", function() {
  document.getElementById("login-modal").style.display = "none";
});

// Redirigir a WhatsApp
document.getElementById("cart-btn").addEventListener("click", function() {
  window.location.href = "https://wa.me/57315xxxxxxx"; // Cambia el número por el adecuado
});
