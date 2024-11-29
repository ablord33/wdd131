document.addEventListener("DOMContentLoaded", () => {
    // Footer: Set current year and last modified date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // Hamburger Menu Toggle
    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle between hamburger icon and 'X' for close
        menuButton.textContent = isExpanded ? "☰" : "✖";

        // Show or hide the menu
        mainNav.classList.toggle("hidden");
    });

    // Ensure menu is visible in large view on resize
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            mainNav.classList.remove("hidden");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});
// JavaScript for handling the hamburger menu toggle
document.getElementById("menu-btn").addEventListener("click", function() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
});
