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

    // Education & Certifications 섹션 설정
    const educationData = {
        education: `
            <h3>Education</h3>
            <ul>
                <li>목원대학교 지능로봇공학과 졸업 (2018년 03월 - 2024년 02월)</li>
                <li>대전지족고등학교 졸업 (2014년 - 2017년)</li>
            </ul>
        `,
        certifications: `
            <h3>Certifications</h3>
            <ul>
                <li>IOT지식능력검정자격증 (2023년 12월 08일)</li>
                <li>자동차운전면허증 2종 보통 (2017년 12월 22일)</li>
            </ul>
            <h3>Training Completion</h3>
            <ul>
                <li>DSC공유대학 Amazon DeepRacer 자율주행교육 (2023년 11월 24일 ~ 2023년 11월 24일)</li>
                <li>(주)새온 생산파트 인턴십 (2022년 11월 ~ 2023년 02월)
                    <p>활동내용: 제품의 펌웨어를 업데이트 및 코드를 삽입하고 조향, 센서들의 이상 유무를 파악하고 점검과 교체를 하는 업무를 담당</p>
                </li>
            </ul>
        `,
        militaryService: `
            <h3>Military Service</h3>
            <ul>
                <li>복무기간: 2018년 3월 18일 ~ 2020년 10월 20일</li>
                <li>군별: 해병대</li>
                <li>계급: 병장</li>
                <li>병과: 상륙군운용통신</li>
            </ul>
        `
    };

    function showContent(contentType) {
        console.log('showContent called with:', contentType);
        try {
            Object.keys(educationData).forEach(key => {
                const content = document.getElementById(`${key}Content`);
                if (content) {
                    // contentType을 소문자로 변환하여 비교
                    content.style.display = key.toLowerCase() === contentType.toLowerCase() ? 'block' : 'none';
                    if (key.toLowerCase() === contentType.toLowerCase()) {
                        content.innerHTML = educationData[key];
                        console.log(`Content set for ${key}`);
                    }
                } else {
                    console.error(`Element not found: ${key}Content`);
                }
            });
            const guidanceMessage = document.querySelector('.guidance-message');
            if (guidanceMessage) {
                guidanceMessage.style.display = 'none';
            }
        } catch (error) {
            console.error('Error in showContent function:', error);
        }
    }

    const buttons = ['Education', 'Certifications', 'MilitaryService'];
    buttons.forEach(type => {
        const button = document.getElementById(`show${type}`);
        if (button) {
            button.addEventListener('click', () => {
                console.log(`${type} button clicked`);
                // type을 그대로 전달
                showContent(type);
            });
        } else {
            console.error(`Button not found: show${type}`);
        }
    });

    // Swiper 초기화
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide: 1,
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
        });
    } else {
        console.error('Swiper is not loaded');
    }

    // 타이핑 효과 (GSAP 사용)
    const typingText = document.querySelector("#typing-text");
    const textArray = [
        "안녕하세요!<br>제 이름은 박장호입니다.",
        "저는 의사소통 능력이 뛰어난<br>신입 개발자입니다.",
        "항상 배우려는 자세로<br>끊임없이 성장하고 있습니다.",
        "저의 가능성을 알아봐 주실<br>회사를 찾고 있습니다.",
        "함께 발전해 나갈 수 있는<br>기회를 주시면 감사하겠습니다.",
        "아래 Contact Information에서<br>연락처를 확인해 주세요!"
    ];

    if (typeof gsap !== 'undefined' && typeof gsap.registerPlugin === 'function') {
        gsap.registerPlugin(TextPlugin);
    } else {
        console.error('GSAP or TextPlugin is not loaded');
    }

    function animateText(index) {
        try {
            gsap.to(typingText, {
                duration: 2,
                text: { value: textArray[index], delimiter: "" },
                ease: "none",
                onComplete: () => {
                    gsap.to(typingText, {
                        duration: 1,
                        opacity: 0,
                        ease: "power2.in",
                        onComplete: () => {
                            typingText.innerHTML = "";
                            gsap.set(typingText, {opacity: 1});
                            animateText((index + 1) % textArray.length);
                        }
                    });
                }
            });
        } catch (error) {
            console.error('Error in function:', error);
        }
    }

    animateText(0);

    // Skills 숙련도 애니메이션
    const skillLevels = {
        'Python': 90, 'HTML5': 80, 'CSS3': 80, 'JavaScript': 80, 'CSharp': 70, 'Arduino': 80
    };

    const skillInfo = {
        'HTML5': { iconClass: 'devicon-html5-plain colored', displayName: 'HTML' },
        'CSS3': { iconClass: 'devicon-css3-plain colored', displayName: 'CSS' },
        'JavaScript': { iconClass: 'devicon-javascript-plain colored', displayName: 'JavaScript' },
        'Python': { iconClass: 'devicon-python-plain colored', displayName: 'Python' },
        'CSharp': { iconClass: 'devicon-csharp-plain colored', displayName: 'C#' },
        'Arduino': { iconClass: 'devicon-arduino-plain colored', displayName: 'Arduino' }
    };

    const skillsContainer = document.querySelector('.skills-container');
    Object.entries(skillLevels).sort((a, b) => b[1] - a[1]).forEach(([skillName, level]) => {
        const { iconClass, displayName } = skillInfo[skillName];
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `
            <i class="${iconClass}"></i>
            <p>${displayName}</p>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
            <p class="skill-level">0%</p>
        `;
        skillsContainer.appendChild(skillElement);

        setTimeout(() => {
            const progressBar = skillElement.querySelector('.skill-progress');
            const skillLevelText = skillElement.querySelector('.skill-level');
            progressBar.style.width = `${level}%`;
            let currentLevel = 0;
            const intervalId = setInterval(() => {
                if (currentLevel < level) {
                    currentLevel++;
                    skillLevelText.textContent = `${currentLevel}%`;
                } else {
                    clearInterval(intervalId);
                }
            }, 20);
        }, 500);
    });

    // 프로젝트 상세 정보 모달 업데이트
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
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&#8593;';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });

    function initializeFeatures() {
        if (typeof Swiper !== 'undefined') {
            // Swiper 초기화
        }
        if (typeof gsap !== 'undefined') {
            // GSAP 관련 기능 초기화
        }
        // 기타 기능 초기화
    }

    // 페이지 로드 후 일정 시간 뒤에 기능 초기화
    window.addEventListener('load', function() {
        setTimeout(initializeFeatures, 1000);
    });
});
