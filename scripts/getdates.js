document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});
