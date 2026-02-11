const toggleBtn = document.getElementById("toggleAbout");
const aboutText = document.getElementById("aboutText");

toggleBtn.addEventListener("click", () => {
  const isCollapsed = aboutText.classList.toggle("collapsed");
  toggleBtn.textContent = isCollapsed ? "Leggi altro" : "Mostra meno";
});
