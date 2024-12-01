let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-container img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const searchButton = document.getElementById("search-btn");
const profileButton = document.getElementById("profile-btn");
const cartButton = document.getElementById("cart-btn");

const searchModal = document.getElementById("search-modal");
const loginModal = document.getElementById("login-modal");
const closeButtons = document.querySelectorAll(".close");

function showSlide(index) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

if (prev && next) {
  prev.addEventListener("click", () => showSlide(currentSlide - 1));
  next.addEventListener("click", () => showSlide(currentSlide + 1));
}

function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function handleSearchModal() {
  openModal(searchModal);
}

function handleLoginModal() {
  openModal(loginModal);
}

function handleCart() {
  const phoneNumber = "573105620190";
  const message = "Hola, estoy interesado en realizar una compra en Selvárea. ¿Podrías ayudarme?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

if (searchButton) searchButton.addEventListener("click", handleSearchModal);
if (profileButton) profileButton.addEventListener("click", handleLoginModal);
if (cartButton) cartButton.addEventListener("click", handleCart);

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    closeModal(modal);
  });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
});

const cart = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const productElement = event.target.closest(".product");
    const productName = productElement.getAttribute("data-product-name");
    const productPrice = productElement.getAttribute("data-product-price");

    cart.push({ name: productName, price: productPrice });
    alert(`${productName} ha sido añadido al carrito.`);
  });
});

function handleCart() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const phoneNumber = "573001234567";
  const baseMessage = "Hola, estoy interesado en comprar los siguientes productos:\n\n";
  const productDetails = cart
    .map((item, index) => `${index + 1}. ${item.name} - $${parseInt(item.price).toLocaleString()}`)
    .join("\n");

  const total = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
  const totalMessage = `\n\nTotal: $${total.toLocaleString()}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(baseMessage + productDetails + totalMessage)}`;

  window.open(whatsappUrl, "_blank");
}

if (cartButton) {
  cartButton.addEventListener("click", handleCart);
}

const searchInput = document.getElementById("search-input");
const searchSubmit = document.getElementById("search-submit");
const searchResults = document.getElementById("search-results");

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (!query) {
    searchResults.innerHTML = "<p>Por favor, escribe una palabra para buscar.</p>";
    return;
  }

  const elementsToSearch = document.querySelectorAll("h2, p, .product");
  let found = false;

  elementsToSearch.forEach((element) => {
    const text = element.textContent.trim().toLowerCase();
    if (text.includes(query)) {
      found = true;

      const link = document.createElement("a");
      link.href = `#${element.id || ""}`;
      link.textContent = `Coincidencia encontrada: "${text.substring(0, 50)}..."`;
      link.style.display = "block";

      searchResults.appendChild(link);
    }
  });

  if (!found) {
    searchResults.innerHTML = `<p>No se encontraron resultados para "${query}".</p>`;
  }
}

if (searchSubmit) {
  searchSubmit.addEventListener("click", performSearch);
}