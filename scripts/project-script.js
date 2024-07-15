document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Add any additional JavaScript functionalities here
    // Example: Handling form submissions, dynamic content loading, etc.
});

// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // You can add here additional logic like sending the form data to a server

    // Optionally, you can clear the form inputs after submission
    this.reset();
    
    // Scroll to the top of the form so user can see the confirmation message
    this.scrollIntoView({ behavior: 'smooth' });
});
