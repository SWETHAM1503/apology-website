
// Run when the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Add a smooth entrance effect
    document.body.classList.add("loaded");

    // Find all navigation buttons
    const buttons = document.querySelectorAll(".btn");

    // Add a small click animation
    buttons.forEach(function (button) {

        button.addEventListener("click", function () {
            button.style.opacity = "0.7";
        });

    });

});
