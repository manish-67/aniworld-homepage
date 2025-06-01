// Example script: show alert when Learn More button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const learnMoreBtn = document.querySelector(".btn-primary");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      alert("Thanks for your interest! Scroll down to explore features.");
    });
  }
});
