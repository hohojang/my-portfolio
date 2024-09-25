document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll to section
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Swiper 초기화
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        touchRatio: 0,
        keyboard: {
            enabled: false,
        },
        mousewheel: {
            invert: false,
        },
        on: {
            touchStart: function (e) {
                e.preventDefault(); // 터치 이벤트 기본 동작 방지
            },
        },
    });

    // 타이핑 효과 (한국어)
    new Typed('#typing-text', {
        strings: [
            "안녕하세요! 박장호입니다.",
            "저는 매일 성장하는<br>개발자입니다.",
            "개발에 매료되어<br>매일 노력하고 있습니다!"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
        contentType: 'html', // HTML 태그 사용 허용
    });

    // Education & Certifications 섹션
    const showEducationBtn = document.getElementById('showEducation');
    const showCertificationsBtn = document.getElementById('showCertifications');
    const educationContent = document.getElementById('educationContent');
    const certificationsContent = document.getElementById('certificationsContent');

    showEducationBtn.addEventListener('click', function() {
        educationContent.style.display = 'block';
        educationContent.innerHTML = `
            <h3>Education</h3>
            <ul>
                <li>Bachelor's Degree in Computer Science, XYZ University (2018-2022)</li>
                <li>High School Diploma, ABC High School (2015-2018)</li>
            </ul>
        `;
        certificationsContent.style.display = 'none';
    });

    showCertificationsBtn.addEventListener('click', function() {
        certificationsContent.style.display = 'block';
        certificationsContent.innerHTML = `
            <h3>Certifications</h3>
            <ul>
                <li>AWS Certified Developer - Associate (2023)</li>
                <li>Microsoft Certified: Azure Fundamentals (2022)</li>
                <li>CompTIA A+ (2021)</li>
            </ul>
        `;
        educationContent.style.display = 'none';
    });

    // Skills 숙련도 애니메이션
    const skills = document.querySelectorAll('.skill');
    const skillLevels = {
        'HTML': 90,
        'CSS': 85,
        'JavaScript': 80,
        'Python': 75,
        'C#': 70,
        'Arduino': 65
    };

    skills.forEach(skill => {
        const skillName = skill.querySelector('p').textContent;
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        const skillProgress = document.createElement('div');
        skillProgress.className = 'skill-progress';
        skillBar.appendChild(skillProgress);
        skill.appendChild(skillBar);

        setTimeout(() => {
            skillProgress.style.width = `${skillLevels[skillName]}%`;
        }, 500);
    });
});
