document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = pages.length - i;
                page.classList.add('active');
                if (page.id === 'projects') {
                    loadProjects();
                } else if (page.id === 'skills') {
                    loadSkills();
                } else if (page.id === 'education') {
                    loadEducation();
                }
            } else if (i < index) {
                page.style.transform = 'rotateY(-180deg)';
                page.style.zIndex = i;
                page.classList.remove('active');
            } else {
                page.style.transform = 'rotateY(0deg)';
                page.style.zIndex = pages.length - i;
                page.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // 타이핑 효과
    const typingContainer = document.getElementById('typing-container');
    const textArray = [
        "안녕하세요! 제 이름은 박장호입니다.",
        "의사소통 능력이 뛰어난 신입 개발자입니다.",
        "항상 배우려는 자세로 끊임없이 성장합니다.",
        "저의 가능성을 알아봐 주실 회사를 찾고 있습니다.",
        "함께 발전해 나갈 수 있는 기회를 주세요!",
        "아래에서 제 연락처를 확인해 주세요!"
    ];

    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (textIndex < textArray.length) {
            if (charIndex < textArray[textIndex].length) {
                typingContainer.innerHTML += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            } else {
                setTimeout(() => {
                    textIndex++;
                    charIndex = 0;
                    typingContainer.innerHTML = '';
                    typeText();
                }, 2000);
            }
        } else {
            textIndex = 0;
            typeText();
        }
    }

    typeText();

    // 프로젝트 로딩 함수
    function loadProjects() {
        const projectsContainer = document.querySelector('.project-container');
        if (projectsContainer.children.length > 0) return;

        const projects = [
            {
                title: '포트폴리오 웹사이트',
                image: 'images/portfolio-preview.png',
                description: '개인 포트폴리오를 위한 반응형 웹사이트입니다.',
                details: '이 프로젝트는 HTML, CSS, JavaScript를 사용하여 제작되었으며, 책 넘기기 효과와 다양한 애니메이션을 포함하고 있습니다.'
            },
            // 다른 프로젝트 추가
        ];

        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <p>${project.description}</p>
                <div class="project-details">${project.details}</div>
                <button class="project-toggle">자세히 보기</button>
            `;
            projectsContainer.appendChild(projectElement);

            setTimeout(() => {
                projectElement.classList.add('visible');
            }, index * 200);

            const toggleBtn = projectElement.querySelector('.project-toggle');
            const details = projectElement.querySelector('.project-details');
            toggleBtn.addEventListener('click', () => {
                details.classList.toggle('expanded');
                toggleBtn.textContent = details.classList.contains('expanded') ? '접기' : '자세히 보기';
            });
        });
    }

    // 스킬 로딩 함수
    function loadSkills() {
        const skillsContainer = document.querySelector('.skills-container');
        if (skillsContainer.children.length > 0) return;

        const skills = [
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'React', level: 75 },
            { name: 'Node.js', level: 70 },
            { name: 'Python', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'Git', level: 75 }
        ];

        skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.innerHTML = `
                <h3>${skill.name}</h3>
                <div class="skill-bar">
                    <div class="skill-level" style="width: 0%"></div>
                </div>
            `;
            skillsContainer.appendChild(skillElement);

            setTimeout(() => {
                skillElement.querySelector('.skill-level').style.width = `${skill.level}%`;
            }, index * 100);
        });
    }

    // Education 로딩 함수
    function loadEducation() {
        const educationContent = document.getElementById('education-content');
        if (educationContent.children.length > 0) return;

        const educationData = [
            {
                title: 'Education',
                items: [
                    '목원대학교 지능로봇공학과 졸업 (2018년 03월 - 2024년 02월)',
                    '대전지족고등학교 졸업 (2014년 - 2017년)'
                ]
            },
            {
                title: 'Certifications',
                items: [
                    'IOT지식능력검정자격증 (2023년 12월 08일)',
                    '자동차운전면허증 2종 보통 (2017년 12월 22일)'
                ]
            },
            {
                title: 'Training Completion',
                items: [
                    'DSC공유대학 Amazon DeepRacer 자율주행교육 (2023년 11월 24일 ~ 2023년 11월 24일)',
                    '(주)새온 생산파트 인턴십 (2022년 11월 ~ 2023년 02월)'
                ]
            },
            {
                title: 'Military Service',
                items: [
                    '복무기간: 2018년 3월 18일 ~ 2020년 10월 20일',
                    '군별: 해병대',
                    '계급: 병장',
                    '병과: 상륙군운용통신'
                ]
            }
        ];

        educationData.forEach((section, index) => {
            const sectionElement = document.createElement('div');
            sectionElement.classList.add('education-section');
            sectionElement.innerHTML = `
                <h3>${section.title}</h3>
                <ul>
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            educationContent.appendChild(sectionElement);

            setTimeout(() => {
                sectionElement.style.opacity = '1';
                sectionElement.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // 초기 페이지 표시
    showPage(currentPage);
});
