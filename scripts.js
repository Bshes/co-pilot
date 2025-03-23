// Add your JavaScript for animations and interactions here
document.addEventListener("DOMContentLoaded", function() {
    // Implement any necessary JavaScript for animations and interactions here
    console.log("Website loaded and ready!");
    
    // Example: Add a simple fade-in effect on scroll
    const faders = document.querySelectorAll('.service-card, .result-card, .timeline-step');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});