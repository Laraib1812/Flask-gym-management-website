// Navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const navbarLinks = document.querySelector(".navbar-links");

    hamburgerButton.addEventListener("click", function() {
        // Toggle the 'active' class to show/hide the navbar links
        navbarLinks.classList.toggle("active");

        // Optional: Change the button appearance when clicked
        hamburgerButton.classList.toggle("active");
    });
});



// Footer.js
document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear; // Update the year dynamically
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Form submitted successfully!');
});
