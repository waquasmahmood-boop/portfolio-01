// Smooth scroll animation
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Service box animation on scroll
const boxes = document.querySelectorAll(".service-box");

window.addEventListener("scroll", () => {
  boxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
      box.style.transition = "0.5s";
    }
  });
});


// Contact form alert
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});
