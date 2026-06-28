// Futuristic Glitch Effect on Load
document.addEventListener("DOMContentLoaded", () => {
    console.log("SYSTEM BOOT SEQUENCE INITIATED...");
    console.log("LOADING ASSETS...");

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Target all sections with the 'hidden' class
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});