        document.addEventListener('DOMContentLoaded', function() {
            // تغيير الثيم
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

            // فتح وإغلاق المحاضرات
            const lectureHeaders = document.querySelectorAll('.lecture-header');
            lectureHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const lecture = header.parentElement;
                    lecture.classList.toggle('active');
                });
            });

            // تشغيل الفيديو
            const watchBtns = document.querySelectorAll('.watch-video-btn');
            const videoPlayer = document.getElementById('videoPlayer');
            const mainVideoPlayer = document.getElementById('mainVideoPlayer');
            const closeVideoBtn = document.getElementById('closeVideo');

            watchBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const videoId = this.getAttribute('href').substring(1);
                    
                    // هنا يمكنك تحديد مصدر الفيديو بناءً على videoId
                    // في هذا المثال سنستخدم فيديو تجريبي
                    mainVideoPlayer.src = 'https://youtu.be/mAq4Dfmhipc?si=fM1tjVNO5SCm7LvN';
                    
                    videoPlayer.classList.add('show');
                    mainVideoPlayer.play();
                    
                    // التمرير إلى الأعلى بسلاسة
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });

            // إغلاق الفيديو
            closeVideoBtn.addEventListener('click', () => {
                videoPlayer.classList.remove('show');
                mainVideoPlayer.pause();
            });
        });