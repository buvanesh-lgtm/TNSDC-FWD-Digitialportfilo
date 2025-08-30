// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Console welcome message
console.log("🚀 Welcome to Buvanesh's Portfolio!");

// Contact form submit
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  // Show success message
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "block";

  // Clear form fields
  this.reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});