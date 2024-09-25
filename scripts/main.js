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
        effect: 'coverflow',
        grabCursor: true,
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
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slideToClickedSlide: true,
        loop: true,
        loopAdditionalSlides: 3,
        // 마우스 휠 컨트롤 추가
        mousewheel: {
            invert: false,
        },
    });

    // 타이핑 효과 (한국어)
    new Typed('#typing-text', {
        strings: [
            "안녕하세요!<br>제 이름은 박장호입니다.",
            "저는 의사소통 능력이 뛰어난<br>신입 개발자입니다.",
            "항상 배우려는 자세로<br>끊임없이 성장하고 있습니다.",
            "저의 가능성을 알아봐 주실<br>회사를 찾고 있습니다.",
            "함께 발전해 나갈 수 있는<br>기회를 주시면 감사하겠습니다.",
            "아래 Contact Information에서<br>연락처를 확인해 주세요!"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
        contentType: 'html',
        smartBackspace: true
    });

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
        const skill = document.createElement('div');
        skill.className = 'skill';

        const { iconClass, displayName } = getSkillInfo(skillName);

        const icon = document.createElement('i');
        icon.className = iconClass;

        const name = document.createElement('p');
        name.textContent = displayName;

        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';

        const skillProgress = document.createElement('div');
        skillProgress.className = 'skill-progress';

        const skillLevel = document.createElement('p');
        skillLevel.className = 'skill-level';
        skillLevel.textContent = `${level}%`;

        skillBar.appendChild(skillProgress);
        skill.appendChild(icon);
        skill.appendChild(name);
        skill.appendChild(skillBar);
        skill.appendChild(skillLevel);
        skillsContainer.appendChild(skill);

        setTimeout(() => {
            skillProgress.style.width = `${level}%`;
        }, 500);
    });

    // 프로젝트 상세 정보
    const projectDetails = {
        portfolio: {
            title: "포트폴리오 웹사이트",
            content: `
                <h4>사용 기술:</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
                <h4>주요 기능:</h4>
                <ul>
                    <li>반응형 디자인</li>
                    <li>동적 타이핑 효과 (Typed.js)</li>
                    <li>스킬 레벨 애니메이션</li>
                    <li>섹션별 페이드인 효과</li>
                </ul>
                <h4>성과:</h4>
                <ul>
                    <li>모바일 및 데스크톱에서 반응형 디자인 구현</li>
                    <li>GitHub Pages를 활용한 웹사이트 배포</li>
                </ul>
            `
        },
        project2: {
            title: "프로젝트 2",
            content: `
                <h4>사용 기술:</h4>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <h4>주요 기능:</h4>
                <ul>
                    <li>사용자 인증 및 권한 관리</li>
                    <li>실시간 데이터 업데이트</li>
                    <li>RESTful API 구현</li>
                </ul>
                <h4>성과:</h4>
                <ul>
                    <li>1000+ 활성 사용자 확보</li>
                    <li>클라우드 서버에 성공적으로 배포</li>
                </ul>
            `
        },
        project3: {
            title: "프로젝트 3",
            content: `
                <h4>사용 기술:</h4>
                <ul>
                    <li>Python</li>
                    <li>TensorFlow</li>
                    <li>OpenCV</li>
                </ul>
                <h4>주요 기능:</h4>
                <ul>
                    <li>실시간 객체 인식</li>
                    <li>다중 객체 추적</li>
                    <li>데이터 시각화</li>
                </ul>
                <h4>성과:</h4>
                <ul>
                    <li>95% 이상의 정확도 달성</li>
                    <li>로컬 및 클라우드 환경에서 구동 가능</li>
                </ul>
            `
        }
    };

    // 프로젝트 상세 정보 모달 기능
    const projectDetailsButtons = document.querySelectorAll('.project-details-btn');
    const projectDetailsModal = document.querySelector('.project-details-modal');
    const closeBtn = document.querySelector('.close-btn');
    const projectDetailsContent = document.querySelector('.project-details-content');
    const modalContent = projectDetailsModal.querySelector('.modal-content');
    const modalTitle = document.getElementById('modal-title');

    function openModal(projectKey) {
        const project = projectDetails[projectKey];
        if (project) {
            projectDetailsModal.style.display = 'flex';
            modalTitle.textContent = project.title;
            projectDetailsContent.innerHTML = project.content;
            document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
            
            // 모달 창 크기 조정
            modalContent.style.maxHeight = '90vh';
            modalContent.style.overflowY = 'auto';
            
            // 스크롤을 맨 위로 이동
            modalContent.scrollTop = 0;
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
});
