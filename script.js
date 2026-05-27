// ═══════════════════════════════════════
//   Gustavo Barbosa Gonçalves — Portfolio
//   script.js
// ═══════════════════════════════════════

// ── Active nav on scroll ──
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

// ── Download CV ──
function downloadCV() {
  const link = document.createElement("a");
  link.href = "cv.pdf";
  link.download = "Curriculo_Gustavo_Barbosa_Goncalves.pdf";
  link.click();
}

// ── Modal UNIFEI ──
function openModal() {
  document.getElementById("modal").classList.add("open");
}
function closeModal(e) {
  if (e.target === document.getElementById("modal")) {
    document.getElementById("modal").classList.remove("open");
  }
}
function closeModalBtn() {
  document.getElementById("modal").classList.remove("open");
}

// ── Animate skill bars on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".sbar-fill").forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".skills-row").forEach(el => observer.observe(el));
