// Accessible JavaScript for Bina Lemus's Web Developer Portfolio

// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
  
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Focus management for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('focus', function () {
            this.classList.add('focus');
        });

        link.addEventListener('blur', function () {
            this.classList.remove('focus');
        });
    });
});

// Additional JavaScript for your specific needs can be added here
