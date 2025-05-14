         window.addEventListener('load', function() {
        setTimeout(function() {
            const notification = document.getElementById('whatsappNotification');
            const sound = document.getElementById('notificationSound');
            
            notification.classList.add('show');
            sound.play().catch(e => console.log('تعذر تشغيل الصوت:', e));
        }, 2000); 
    });
    
    document.getElementById('closeNotification').addEventListener('click', function() {
        document.getElementById('whatsappNotification').classList.remove('show');
    });
        document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    setTimeout(function() {
        const newBadges = document.querySelectorAll('.new-badge');
        newBadges.forEach(badge => {
            badge.remove();
        });
    }, 24 * 60 * 60 * 1000); 
});