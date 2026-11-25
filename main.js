// Contact form feedback
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formSuccess.classList.remove("d-none");
    contactForm.reset();
  });
}

// Portfolio category filter
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.getAttribute("data-filter");

    filterButtons.forEach((b) => {
      b.classList.remove("btn-indigo", "active");
      b.classList.add("btn-outline-light");
    });
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-indigo", "active");

    portfolioItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");
      if (selectedCategory === "all" || itemCategory === selectedCategory) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});