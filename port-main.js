// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Sticky Navigation
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-md");
    navbar.classList.add("bg-white");
  } else {
    navbar.classList.remove("shadow-md");
  }
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("scale-100");
  } else {
    backToTopButton.classList.remove("scale-100");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Project Filtering
const projectFilters = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-card");

projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Update active filter button
    projectFilters.forEach((btn) => {
      btn.classList.remove("bg-indigo-600", "text-white");
      btn.classList.add("bg-gray-200", "text-gray-700");
    });
    filter.classList.remove("bg-gray-200", "text-gray-700");
    filter.classList.add("bg-indigo-600", "text-white");

    // Filter projects
    const category = filter.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Animation on scroll
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animatable");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.1,
});

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Skills progress animation
const progressBars = document.querySelectorAll(".progress-fill");

function animateProgress() {
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Trigger animations when page loads
window.addEventListener("load", () => {
  animateProgress();
});
