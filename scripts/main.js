document.addEventListener('DOMContentLoaded', function() {
    // 섹션 가시성 관찰
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

    // 스무스 스크롤 함수
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }

    // 네비게이션 및 앵커 링크에 스무스 스크롤 적용
    document.querySelectorAll('nav ul li a, a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll(anchor.getAttribute('href'));
        });
    });

    // 타이핑 효과 (GSAP 사용)
    const typingText = document.querySelector("#typing-text");
    const textArray = [
        "안녕하세요! 제 이름은 박장호입니다.",
        "의사소통 능력이 뛰어난 신입 개발자입니다.",
        "항상 배우려는 자세로 끊임없이 성장합니다.",
        "저의 가능성을 알아봐 주실 회사를 찾고 있습니다.",
        "함께 발전해 나갈 수 있는 기회를 주세요!",
        "아래에서 제 연락처를 확인해 주세요!"
    ];

    let currentTextIndex = 0;

    function typeText() {
        if (currentTextIndex >= textArray.length) {
            currentTextIndex = 0;
        }

        const currentText = textArray[currentTextIndex];

        gsap.to(typingText, {
            duration: 1,
            text: {
                value: currentText,
                delimiter: ""
            },
            ease: "none",
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(typingText, {
                        duration: 0.5,
                        text: {
                            value: "",
                            delimiter: ""
                        },
                        ease: "none",
                        onComplete: () => {
                            currentTextIndex++;
                            typeText();
                        }
                    });
                }, 1500);
            }
        });
    }

    typeText();

    // 스킬 바 애니메이션
    const skills = [
        { name: 'HTML', level: 90, icon: 'fab fa-html5' },
        { name: 'CSS', level: 85, icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
        { name: 'React', level: 75, icon: 'fab fa-react' },
        { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
        { name: 'Python', level: 85, icon: 'fab fa-python' },
    ];

    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
            <p class="skill-level">0%</p>
        `;
        skillsContainer.appendChild(skillElement);

        const skillProgress = skillElement.querySelector('.skill-progress');
        const skillLevelText = skillElement.querySelector('.skill-level');

        gsap.to(skillProgress, {
            width: `${skill.level}%`,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5,
            onUpdate: function() {
                const progress = Math.round(this.progress() * skill.level);
                skillLevelText.textContent = `${progress}%`;
            }
        });
    });

    // 프로젝트 상세 정보 모달
    const projectDetails = {
        portfolio: {
            title: '포트폴리오 웹사이트',
            description: '개인 포트폴리오를 위한 반응형 웹사이트',
            features: [
                '반응형 디자인',
                '인터랙티브 요소',
                'CSS 애니메이션',
                'JavaScript를 이용한 동적 콘텐츠'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'Swiper.js']
        },
        chatbot: {
            title: 'AI 챗봇 프로젝트',
            description: '자연어 처리를 이용한 지능형 챗봇 시스템',
            features: [
                '자연어 처리 알고리즘',
                '실시간 대화 기능',
                '다국어 지원',
                '사용자 맞춤형 응답'
            ],
            technologies: ['Python', 'TensorFlow', 'NLP', 'Flask']
        },
        smarthome: {
            title: 'IoT 스마트홈 시스템',
            description: '사물인터넷 기술을 활용한 스마트홈 제어 시스템',
            features: [
                '원격 기기 제어',
                '에너지 사용량 모니터링',
                '음성 명령 지원',
                '자동화 시나리오 설정'
            ],
            technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'Node.js']
        }
    };

    const projectDetailsModal = document.querySelector('.project-details-modal');
    const modalContent = projectDetailsModal.querySelector('.modal-content');

    function openModal(projectKey) {
        try {
            const details = projectDetails[projectKey];
            if (details) {
                modalContent.innerHTML = `
                    <span class="close-btn">&times;</span>
                    <h3>${details.title}</h3>
                    <p>${details.description}</p>
                    <h4>주요 기능:</h4>
                    <ul>${details.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                    <h4>사용된 기술:</h4>
                    <ul>${details.technologies.map(tech => `<li>${tech}</li>`).join('')}</ul>
                `;
                projectDetailsModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        } catch (error) {
            console.error('Error in function:', error);
        }
    }

    function closeModal() {
        try {
            projectDetailsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } catch (error) {
            console.error('Error in function:', error);
        }
    }

    document.querySelectorAll('.project-details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(button.dataset.project);
        });
    });

    projectDetailsModal.addEventListener('click', closeModal);
    modalContent.addEventListener('click', (e) => e.stopPropagation());

    // Education & Certifications 동적 안내 메시지
    const educationContainer = document.querySelector('.education-container');
    const guidanceMessage = document.createElement('p');
    guidanceMessage.textContent = '버튼을 클릭하여 정보를 확인하세요.';
    guidanceMessage.classList.add('guidance-message');
    educationContainer.insertBefore(guidanceMessage, educationContainer.firstChild);

    document.querySelectorAll('.education-container button').forEach(button => {
        button.addEventListener('click', () => {
            guidanceMessage.style.display = 'none';
        });
    });

    // 스크롤 투 탑 버튼
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // 스크롤 이벤트 최적화
    const handleScroll = debounce(() => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    // 이미지 지연 로딩
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    // 성능 최적화: 디바운스 함수
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 접근성: 키보드 네비게이션 개선
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectDetailsModal.style.display === 'flex') {
            closeModal();
        }
    });
});
