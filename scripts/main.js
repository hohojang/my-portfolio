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
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
        mousewheel: {
            invert: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
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
        'HTML5': 90,
        'CSS3': 85,
        'JavaScript': 80,
        'Python': 75,
        'CSharp': 70,
        'Arduino': 65
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
});
