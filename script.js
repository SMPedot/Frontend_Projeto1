const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateIcon(theme) {
  themeIcon.className = theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun";
}

updateIcon(document.documentElement.getAttribute("data-theme"));

themeToggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateIcon(next);
});
