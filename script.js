// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const page = this.getAttribute("href");
            window.location.href = page;
        });
    });
});


// image_home.js


document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const paymentForm = document.getElementById('payment-form');

    submitButton.addEventListener('click', function () {
        // Simulate payment processing
        alert('Payment processed successfully');
        paymentForm.reset();
    });
});

