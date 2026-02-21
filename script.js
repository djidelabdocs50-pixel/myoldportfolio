// script.js

// Smooth Scroll Navigation
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Lazy Loading
const lazyLoad = () => {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
};
window.addEventListener('load', lazyLoad);

// Form Validation
const validateForm = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        let valid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        if (!valid) e.preventDefault();
    });
};
window.addEventListener('DOMContentLoaded', validateForm);

// Scroll Animations
const scrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, config);

    elements.forEach(element => {
        observer.observe(element);
    });
};
window.addEventListener('load', scrollAnimations);

// Mobile Menu Toggle
const toggleMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};
document.addEventListener('DOMContentLoaded', toggleMobileMenu);

// Dynamic Interactions
const dynamicInteractions = () => {
    const dynamicElements = document.querySelectorAll('.dynamic-interaction');
    dynamicElements.forEach((element) => {
        element.addEventListener('click', () => {
            element.classList.toggle('active');
        });
    });
};
document.addEventListener('DOMContentLoaded', dynamicInteractions);