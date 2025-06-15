// Scroll to products section
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Sample product data
const products = [
  { id: 1, name: "Smart Glasses X5", price: 299, category: "tech", img: "https://via.placeholder.com/300x200" },
  { id: 2, name: "FutureWear Jacket", price: 149, category: "fashion", img: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Neon Sneakers", price: 99, category: "fashion", img: "https://via.placeholder.com/300x200" },
  { id: 4, name: "AI Smartwatch Pro", price: 399, category: "tech", img: "https://via.placeholder.com/300x200" },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function renderProducts(data) {
  productGrid.innerHTML = "";
  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const sort = sortFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortFilter.addEventListener("change", filterAndSortProducts);
window.addEventListener("DOMContentLoaded", () => renderProducts(products));

// Contact Form Submission (Simulation)
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for your message! We'll get back to you soon.");
});
