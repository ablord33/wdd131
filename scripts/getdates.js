// Get the current year and display it in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date and display it in the footer's second span
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;
