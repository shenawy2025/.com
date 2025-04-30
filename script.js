const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});