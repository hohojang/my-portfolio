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
});
