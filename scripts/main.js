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

    // Education & Certifications 섹션
    const showEducationBtn = document.getElementById('showEducation');
    const showCertificationsBtn = document.getElementById('showCertifications');
    const showMilitaryServiceBtn = document.getElementById('showMilitaryService');
    const educationContent = document.getElementById('educationContent');
    const certificationsContent = document.getElementById('certificationsContent');
    const militaryServiceContent = document.getElementById('militaryServiceContent');

    showEducationBtn.addEventListener('click', function() {
        educationContent.style.display = 'block';
        educationContent.innerHTML = `
            <h3>Education</h3>
            <ul>
                <li>목원대학교 지능로봇공학과 졸업 (2018년 03월 - 2024년 02월)</li>
                <li>대전지족고등학교 졸업 (2014년 - 2017년)</li>
            </ul>
        `;
        certificationsContent.style.display = 'none';
        militaryServiceContent.style.display = 'none';
    });

    showCertificationsBtn.addEventListener('click', function() {
        certificationsContent.style.display = 'block';
        certificationsContent.innerHTML = `
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
        `;
        educationContent.style.display = 'none';
        militaryServiceContent.style.display = 'none';
    });

    showMilitaryServiceBtn.addEventListener('click', function() {
        militaryServiceContent.style.display = 'block';
        militaryServiceContent.innerHTML = `
            <h3>Military Service</h3>
            <ul>
                <li>복무기간: 2018년 3월 18일 ~ 2020년 10월 20일</li>
                <li>군별: 해병대</li>
                <li>계급: 병장</li>
                <li>병과: 상륙군운용통신</li>
            </ul>
        `;
        educationContent.style.display = 'none';
        certificationsContent.style.display = 'none';
    });

    // Swiper 초기화
    const swiper = new Swiper('.swiper-container', {
        effect: 'slide', // 'coverflow' 대신 'slide' 사용
        grabCursor: true,
        centeredSlides: false, // 중앙 정렬 해제
        slidesPerView: 1, // 한 번에 하나의 슬라이드만 표시
        spaceBetween: 30, // 슬라이드 사이 간격
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            invert: false,
            forceToAxis: true, // 수평 스크롤에만 반응하도록 설정
        },
        keyboard: {
            enabled: true,
        },
    });

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

    gsap.registerPlugin(TextPlugin);

    function animateText(index) {
        gsap.to(typingText, {
            duration: 2,
            text: {
                value: textArray[index],
                delimiter: ""
            },
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
    }

    animateText(0);

    // Skills 숙련도 애니메이션
    const skillsContainer = document.querySelector('.skills-container');
    const skillLevels = {
        'Python': 90,
        'HTML5': 80,
        'CSS3': 80,
        'JavaScript': 80,
        'CSharp': 70,
        'Arduino': 80
    };

    // 숙련도 순으로 정렬
    const sortedSkills = Object.entries(skillLevels).sort((a, b) => b[1] - a[1]);

    // skillName에 따라 적절한 아이콘 클래스와 표시 이름을 반환하는 함수
    function getSkillInfo(skillName) {
        const iconClasses = {
            'HTML5': 'devicon-html5-plain colored',
            'CSS3': 'devicon-css3-plain colored',
            'JavaScript': 'devicon-javascript-plain colored',
            'Python': 'devicon-python-plain colored',
            'CSharp': 'devicon-csharp-plain colored',
            'Arduino': 'devicon-arduino-plain colored'
        };
        const displayNames = {
            'HTML5': 'HTML',
            'CSS3': 'CSS',
            'CSharp': 'C#'
        };
        return {
            iconClass: iconClasses[skillName],
            displayName: displayNames[skillName] || skillName
        };
    }

    sortedSkills.forEach(([skillName, level]) => {
        const { iconClass, displayName } = getSkillInfo(skillName);
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

        // 애니메이션 효과
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

    // 프로젝트 상세 정보 모달
    const projectDetailsButtons = document.querySelectorAll('.project-details-btn');
    const projectDetailsModal = document.querySelector('.project-details-modal');
    const modalContent = projectDetailsModal.querySelector('.modal-content');
    const closeBtn = projectDetailsModal.querySelector('.close-btn');

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
        project2: {
            title: '프로젝트 2',
            description: '프로젝트 2에 대한 설명',
            features: [
                '기능 1',
                '기능 2',
                '기능 3'
            ],
            technologies: ['기술 1', '기술 2', '기술 3']
        },
        project3: {
            title: '프로젝트 3',
            description: '프로젝트 3에 대한 설명',
            features: [
                '기능 1',
                '기능 2',
                '기능 3'
            ],
            technologies: ['기술 1', '기술 2', '기술 3']
        }
    };

    function openModal(projectKey) {
        const details = projectDetails[projectKey];
        if (details) {
            modalContent.innerHTML = `
                <span class="close-btn">&times;</span>
                <h3>${details.title}</h3>
                <p>${details.description}</p>
                <h4>주요 기능:</h4>
                <ul>
                    ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <h4>사용된 기술:</h4>
                <ul>
                    ${details.technologies.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
            `;
            projectDetailsModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
        } else {
            console.error('Project details not found for key:', projectKey);
        }
    }

    function closeModal() {
        projectDetailsModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 배경 스크롤 복원
    }

    projectDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            const projectKey = this.dataset.project;
            openModal(projectKey);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // 모달 외부 클릭 시 닫기 (모바일 터치 포함)
    projectDetailsModal.addEventListener('click', closeModal);
    projectDetailsModal.addEventListener('touchstart', function(e) {
        if (e.target === projectDetailsModal) {
            closeModal();
        }
    });

    // 모달 내부 클릭 시 이벤트 전파 중지
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    modalContent.addEventListener('touchstart', function(e) {
        e.stopPropagation();
    });

    // Education & Certifications 동적 안내 메시지
    const educationContainer = document.querySelector('.education-container');
    const guidanceMessage = document.createElement('p');
    guidanceMessage.textContent = '버튼을 클릭하여 정보를 확인하세요.';
    guidanceMessage.classList.add('guidance-message');
    educationContainer.insertBefore(guidanceMessage, educationContainer.firstChild);

    const educationButtons = document.querySelectorAll('.education-container button');
    educationButtons.forEach(button => {
        button.addEventListener('click', () => {
            guidanceMessage.style.display = 'none';
        });
    });

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&#8593;';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
