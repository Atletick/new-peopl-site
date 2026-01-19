document.querySelectorAll(".region").forEach(r => {
  r.addEventListener("mouseenter", () => r.style.opacity = "0.7");
  r.addEventListener("mouseleave", () => r.style.opacity = "1");
});
