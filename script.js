/*
  Sabari Portfolio JavaScript
  Features:
  1. Mobile menu
  2. Active navbar link
  3. Scroll reveal animation
  4. Contact form alert
  5. Image fallback
  6. Background particles
*/

// Select elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

// Mobile menu open / close
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open");
});

// Close mobile menu when clicking a nav link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
  });
});

// Active navbar link while scrolling
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Contact form alert
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Thank you! Your message UI is working. Backend is not connected yet.");

  contactForm.reset();
});

// Image fallback system
// If image path is wrong or image is missing, this will show the fallback design.
const allImages = document.querySelectorAll("img");

allImages.forEach((img) => {
  img.addEventListener("error", () => {
    const parent = img.parentElement;
    parent.classList.add("image-missing");
  });
});

// Create floating background particles
const particlesContainer = document.getElementById("particles");

// Number of particles
const particleCount = 35;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("span");

  particle.classList.add("particle");

  // Random left position
  particle.style.left = Math.random() * 100 + "%";

  // Random animation duration
  particle.style.animationDuration = 6 + Math.random() * 8 + "s";

  // Random animation delay
  particle.style.animationDelay = Math.random() * 6 + "s";

  // Random size
  const size = 4 + Math.random() * 6;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  particlesContainer.appendChild(particle);
}