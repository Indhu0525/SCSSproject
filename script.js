
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const htmlElement = document.documentElement;

// Check localStorage for saved theme
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-bs-theme", savedTheme);
    updateIcon(savedTheme);
});

themeToggle.addEventListener("click", function () {
    let currentTheme = htmlElement.getAttribute("data-bs-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === "dark") {
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill"); // Change to Sun (Light Mode)
    } else {
        themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill"); // Change to Moon (Dark Mode)
    }
}

