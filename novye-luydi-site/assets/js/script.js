const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/* ===== SCROLL ANIMATION WITH DELAY ===== */
const items = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120);
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach(item => observer.observe(item));

/* ===== CARD TILT EFFECT ===== */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});