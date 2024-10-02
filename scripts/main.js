// 전역 변수 및 함수 선언
const typingContainer = document.getElementById('typing-container');
const textArray = [
    "안녕하세요! 제 이름은 박장호입니다.",
    "의사소통 능력이 뛰어난 신입 개발자입니다.",
    "항상 배우려는 자세로 끊임없이 성장합니다.",
    "저의 가능성을 알아봐 주실 회사를 찾고 있습니다.",
    "함께 발전해 나갈 수 있는 기회를 주세요!",
    "Contact Information 페이지에서 제 연락처를 확인해 주세요!"
];

let textIndex = 0;
let charIndex = 0;
let typingInterval;

function startTyping() {
    if (typingInterval) clearInterval(typingInterval);
    typingContainer.innerHTML = '';
    textIndex = 0;
    charIndex = 0;
    typingInterval = setInterval(typeText, 50);
}

function typeText() {
    if (textIndex < textArray.length) {
        if (charIndex < textArray[textIndex].length) {
            typingContainer.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
        } else {
            typingContainer.innerHTML += '<br>';
            textIndex++;
            charIndex = 0;
            if (textIndex >= textArray.length) {
                clearInterval(typingInterval);
            }
        }
    }
}

// 페이지 관련 변수 및 함수
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPage = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.transform = 'rotateY(0deg)';
            page.classList.add('active');
            loadPageContent(page.id);
        } else {
            page.style.transform = 'rotateY(180deg)';
            page.classList.remove('active');
        }
    });
    currentPage = index;
    updateNavigationButtons();
}

function loadPageContent(pageId) {
    switch (pageId) {
        case 'about':
            loadAboutMe();
            break;
        case 'education':
            loadEducation();
            break;
        case 'skills':
            loadSkills();
            break;
        case 'projects':
            loadProjects();
            break;
    }
}

function loadAboutMe() {
    if (typingInterval) {
        clearInterval(typingInterval);
    }
    const typingContainer = document.getElementById('typing-container');
    if (typingContainer) {
        typingContainer.innerHTML = '';
        textIndex = 0;
        charIndex = 0;
        startTyping();
    }
}

function loadEducation() {
    const educationContent = document.getElementById('education-content');
    if (educationContent && educationContent.children.length === 0) {
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
}

function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer && skillsContainer.children.length === 0) {
        const skills = [
            { name: 'HTML', level: 90, icon: '<i class="fab fa-html5"></i>' },
            { name: 'CSS', level: 85, icon: '<i class="fab fa-css3-alt"></i>' },
            { name: 'JavaScript', level: 80, icon: '<i class="fab fa-js-square"></i>' },
            { name: 'React', level: 75, icon: '<i class="fab fa-react"></i>' },
            { name: 'Node.js', level: 70, icon: '<i class="fab fa-node-js"></i>' },
            { name: 'Python', level: 85, icon: '<i class="fab fa-python"></i>' },
            { name: 'SQL', level: 80, icon: '<i class="fas fa-database"></i>' },
            { name: 'Git', level: 75, icon: '<i class="fab fa-git-alt"></i>' }
        ];

        skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
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
}

let currentProjectIndex = 0;

function loadProjects() {
    const projectsContainer = document.querySelector('.project-container');
    const prevProjectBtn = document.getElementById('prevProject');
    const nextProjectBtn = document.getElementById('nextProject');
    
    if (projectsContainer && projectsContainer.children.length === 0) {
        const projects = [
            {
                title: '포트폴리오 웹사이트',
                image: './images/portfolio-preview.png',
                description: '개인 포트폴리오를 위한 반응형 웹사이트입니다.',
                details: `
                    <h4>사용 기술:</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3 (Flexbox, Grid, 반응형 디자인)</li>
                        <li>JavaScript (ES6+)</li>
                    </ul>
                    <h4>주요 기능:</h4>
                    <ul>
                        <li>책 넘기기 효과를 구현한 페이지 전환</li>
                        <li>타이핑 효과를 이용한 자기소개</li>
                        <li>동적으로 로드되는 스킬 및 프로젝트 섹션</li>
                    </ul>
                    <h4>개발 과정에서의 도전과 해결:</h4>
                    <ol>
                        <li>
                            <strong>문제:</strong> 페이지 전환 시 부자연스러운 애니메이션<br>
                            <strong>해결:</strong> CSS transition과 transform 속성을 조정하고, JavaScript로 타이밍을 제어하여 부드러운 전환 효과 구현
                        </li>
                        <li>
                            <strong>문제:</strong> 모바일 기기에서의 레이아웃 깨짐 현상<br>
                            <strong>해결:</strong> 미디어 쿼리를 사용하여 반응형 디자인을 적용하고, flexbox와 grid를 활용하여 유동적인 레이아웃 구성
                        </li>
                        <li>
                            <strong>문제:</strong> 콘텐츠 로딩 시 발생하는 지연과 깜빡임<br>
                            <strong>해결:</strong> 콘텐츠를 동적으로 로드하는 함수를 최적화하고, CSS transition을 이용한 페이드 인 효과 적용
                        </li>
                    </ol>
                    <h4>학습 및 성장:</h4>
                    <p>이 프로젝트를 통해 웹 개발의 전반적인 과정을 경험하며, 특히 사용자 경험(UX)을 고려한 인터페이스 설계의 중요성을 깨달았습니다. 또한, 성능 최적화와 크로스 브라우저 호환성 확보를 위한 다양한 기술을 학습하고 적용할 수 있었습니다.</p>
                `
            },
            {
                title: '데이터 시각화 프로젝트',
                image: './images/pro2.png',
                description: 'Python의 데이터 시각화 라이브러리를 활용하여 복잡한 데이터셋을 분석하고 시각화한 프로젝트입니다.',
                details: `
                    <h4>주요 기능:</h4>
                    <ul>
                        <li>Seaborn과 Matplotlib을 사용한 고급 통계 그래프 생성</li>
                        <li>다양한 데이터셋에 대한 상관관계 분석 및 시각화</li>
                        <li>Pandas를 활용한 대규모 데이터 전처리 및 분석</li>
                        <li>동적이고 인터랙티브한 데이터 시각화 구현</li>
                        <li>다양한 차트 유형(히트맵, 산점도, 박스플롯 등) 구현</li>
                    </ul>

                    <h4>개발 과정에서의 도전과 해결:</h4>
                    <ol>
                        <li>
                            <strong>도전:</strong> 대용량 데이터셋 처리 시 성능 문제<br>
                            <strong>해결:</strong> Pandas의 효율적인 데이터 처리 기능과 NumPy의 벡터화 연산을 활용하여 처리 속도 개선
                        </li>
                        <li>
                            <strong>도전:</strong> 복잡한 다변량 데이터의 효과적인 시각화<br>
                            <strong>해결:</strong> Seaborn의 고급 통계 그래프 기능을 활용하여 다차원 데이터를 2D로 효과적으로 표현
                        </li>
                        <li>
                            <strong>도전:</strong> 일관된 스타일의 차트 디자인 유지<br>
                            <strong>해결:</strong> Matplotlib의 스타일 시트와 사용자 정의 함수를 생성하여 일관된 디자인 적용
                        </li>
                    </ol>

                    <h4>학습 및 성장:</h4>
                    <p>이 프로젝트를 통해 다음과 같은 중요한 기술과 개념을 습득하였습니다:</p>
                    <ul>
                        <li>데이터 시각화의 다양한 기법과 최적의 차트 유형 선택 방법</li>
                        <li>대규모 데이터셋의 효율적인 처리 및 분석 기술</li>
                        <li>시각적 분석을 통한 데이터 인사이트 도출 능력</li>
                        <li>Python 데이터 과학 생태계의 주요 라이브러리 활용 능력 향상</li>
                        <li>데이터 전처리부터 시각화까지 전체 데이터 분석 파이프라인 구축 경험</li>
                    </ul>
                    <p>이 프로젝트는 데이터 시각화의 중요성과 그 잠재력을 깊이 이해하는 계기가 되었으며, 향후 데이터 기반 의사결정에 큰 도움이 될 것입니다.</p>
                    <a href="./pdfs/data_visualization_project.pdf" target="_blank" class="project-pdf-link">프로젝트 상세 보고서 (PDF)</a>
                `
            }
        ];

        function displayProject(index) {
            const project = projects[index];
            projectsContainer.innerHTML = `
                <div class="project">
                    <h3>${project.title}</h3>
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <p>${project.description}</p>
                    <div class="project-details">${project.details}</div>
                    <button class="project-toggle">자세히 보기</button>
                </div>
            `;

            const toggleBtn = projectsContainer.querySelector('.project-toggle');
            const details = projectsContainer.querySelector('.project-details');
            toggleBtn.addEventListener('click', () => {
                details.classList.toggle('expanded');
                toggleBtn.textContent = details.classList.contains('expanded') ? '접기' : '자세히 보기';
            });
        }

        function updateProjectNavigation() {
            prevProjectBtn.disabled = currentProjectIndex === 0;
            nextProjectBtn.disabled = currentProjectIndex === projects.length - 1;
        }

        prevProjectBtn.addEventListener('click', () => {
            if (currentProjectIndex > 0) {
                currentProjectIndex--;
                displayProject(currentProjectIndex);
                updateProjectNavigation();
            }
        });

        nextProjectBtn.addEventListener('click', () => {
            if (currentProjectIndex < projects.length - 1) {
                currentProjectIndex++;
                displayProject(currentProjectIndex);
                updateProjectNavigation();
            }
        });

        // 초기 프로젝트 표시
        displayProject(currentProjectIndex);
        updateProjectNavigation();
    }
}

// 이벤트 리스너
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

// 초기 페이지 로드
document.addEventListener('DOMContentLoaded', function() {
    showPage(0);
});

function updateNavigationButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}