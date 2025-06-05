// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = menuButton.querySelector('[data-lucide="menu"]');
const closeIcon = menuButton.querySelector('[data-lucide="x"]');

menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
});

// Hero content animation
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.getElementById('heroContent');
    setTimeout(() => {
        heroContent.classList.remove('opacity-0', 'translate-y-10');
    }, 100);
});

// Active section highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-purple-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-purple-400');
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Re-initialize Lucide icons after DOM changes
if (window.lucide) {
  lucide.createIcons();
}