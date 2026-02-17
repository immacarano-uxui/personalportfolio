document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => observer.observe(el));
});