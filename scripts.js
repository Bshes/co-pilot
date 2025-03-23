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

    // Chart.js setup for animated graphs in the results section
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
    const ctxAudience = document.getElementById('audienceChart').getContext('2d');
    const ctxLeads = document.getElementById('leadsChart').getContext('2d');
    const ctxLoadTime = document.getElementById('loadTimeChart').getContext('2d');

    const revenueChart = new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: [100, 200, 300, 400],
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                borderColor: 'rgba(255, 111, 97, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    const audienceChart = new Chart(ctxAudience, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Audience Growth',
                data: [10, 20, 30, 40],
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                borderColor: 'rgba(255, 111, 97, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    const leadsChart = new Chart(ctxLeads, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Qualified Leads',
                data: [5, 10, 15, 20],
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                borderColor: 'rgba(255, 111, 97, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });

    const loadTimeChart = new Chart(ctxLoadTime, {
        type: 'bar',
        data: {
            labels: ['Before', 'After'],
            datasets: [{
                label: 'Load Time',
                data: [3, 1],
                backgroundColor: 'rgba(255, 111, 97, 0.2)',
                borderColor: 'rgba(255, 111, 97, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
        }
    });
});
