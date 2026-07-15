// 전역 변수 및 함수 선언
const typingContainer = document.getElementById('typing-container');
const textArray = [
    "안녕하세요! 제 이름은 박장호입니다.",
    "의사소통을 중요시 하는 소프트웨어 개발자입니다.",
    "항상 배우려는 자세로 끊임없이 성장하고 있습니다.",
    "함께 발전해 나갈 회사를 찾고 있습니다.",
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
                    '자동차운전면허증 1종 보통 (2017년 12월 22일)'
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
                title: 'Training Completion',
                items: [
                    '(주)엔엔에프텍 임베디드 소프트웨어 개발(2024년 11월 ~ 2026년 5월)',
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
            { name: 'Python', level: 90, icon: '<i class="fab fa-python"></i>' },
            { name: 'Visual C++', level: 85, icon: '<i class="fas fa-code"></i>' },
            { name: 'C#', level: 80, icon: '<i class="fas fa-code"></i>' },
            { name: 'JavaScript', level: 85, icon: '<i class="fab fa-js-square"></i>' },
            { name: 'C', level: 75, icon: '<i class="fas fa-code"></i>' },
            { name: 'Arduino', level: 70, icon: '<i class="fas fa-microchip"></i>' },
            { name: 'MATLAB', level: 65, icon: '<i class="fas fa-calculator"></i>' },
            { name: 'CSS', level: 80, icon: '<i class="fab fa-css3-alt"></i>' },
            { name: 'HTML5', level: 85, icon: '<i class="fab fa-html5"></i>' },
            { name: 'VSCode', level: 90, icon: '<i class="fas fa-code"></i>' },
            { name: 'Pandas', level: 75, icon: '<i class="fas fa-table"></i>' },
            { name: 'Matplotlib', level: 70, icon: '<i class="fas fa-chart-bar"></i>' },
            { name: 'NumPy', level: 80, icon: '<i class="fas fa-calculator"></i>' }
        ];

        // 숙련도(level) 기준으로 내림차순 정렬
        skills.sort((a, b) => b.level - a.level);

        skills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            skillElement.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <h3>${skill.name}</h3>
                <div class="skill-bar-container">
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 0%"></div>
                    </div>
                    <span class="skill-percent">0%</span>
                </div>
            `;
            skillsContainer.appendChild(skillElement);

            setTimeout(() => {
                const skillLevel = skillElement.querySelector('.skill-level');
                const skillPercent = skillElement.querySelector('.skill-percent');
                skillLevel.style.width = `${skill.level}%`;
                skillPercent.textContent = `${skill.level}%`;
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
                description: 'Python을 사용한 머신러닝 데이터 시각화 프로젝트',
                details: `
                    <h3>프로젝트 요약</h3>
                    <p>이 프로젝트는 대규모 데이터셋을 분석하고 시각화하여 의미 있는 인사이트를 도출하는 것을 목표로 합니다. 주요 특징은 다음과 같습니다:</p>
                    <ul>
                        <li>다양한 데이터 소스로부터 수집된 정보를 통합 및 전처리</li>
                        <li>머신러닝 알고리즘을 활용한 데이터 분석 및 예측 모델 구축</li>
                        <li>시각화 도구를 사용하여 복잡한 데이터 패턴을 직관적으로 표현</li>
                    </ul>

                    <h3>기술 스택</h3>
                    <ul>
                        <li>Python: 주요 프로그래밍 언어</li>
                        <li>Pandas & NumPy: 데이터 처리 및 분석</li>
                        <li>Scikit-learn: 머신러닝 모델 구현</li>
                        <li>Matplotlib & Seaborn: 데이터 시각화</li>
                    </ul>

                    <h3>시각화 예시</h3>
                    <img src="./images/pro2-1.png" alt="데이터 시각화 예시" style="max-width: 100%; height: auto;">

                    <h3>학습 경험 및 도전 과제</h3>
                    <p>이 프로젝트를 통해 대용량 데이터 처리의 복잡성과 시각화의 중요성을 깊이 이해하게 되었습니다. 주요 도전 과제와 해결 방법은 다음과 같습니다:</p>
                    <ul>
                        <li>데이터 정제: 결측치와 이상치 처리를 위해 고급 통계 기법 적용</li>
                        <li>성능 최적화: 대용량 데이터 처리 시 발생한 성능 이슈를 효율적인 알고리즘으로 해결</li>
                        <li>효과적인 시각화: 복잡한 데이터를 직관적으로 이해할 수 있는 시각화 방법 개발</li>
                    </ul>

                    <a href="./documents/ml_data_visualization_project.pdf" target="_blank" class="project-pdf-link">프로젝트 상세 보고서 (PDF)</a>
                `
            },
            {
                title: '지능형 로봇 시스템 개발 프로젝트',
                image: './images/pro3-1.png',  // 프로젝트 대표 이미지 경로
                description: '머신러닝과 컴퓨터 비전을 활용한 지능형 로봇 시스템 개발',
                details: `
                    <h3>프로젝트 개요</h3>
                    <p>이 프로젝트는 사용자 추적, 상품 인식, 장애물 회피 등 다양한 기능을 갖춘 지능형 로봇 시스템을 개발하는 것을 목표로 합니다. 강화학습, 실시간 통신, 센서 데이터 처리 등 첨단 기술을 활용하여 복잡한 환경에서 효과적으로 작동하는 로봇을 구현했습니다.</p>

                    <h3>주요 기능</h3>
                    <ul>
                        <li><strong>사용자 트래킹:</strong> OpenCV를 이용한 사용자 인식 및 추적</li>
                        <li><strong>상품 인식:</strong> 바코드 기반 상품 인식 시스템</li>
                        <li><strong>추돌 방지:</strong> 적외선 센서를 활용한 장애물 감지 및 충돌 방지</li>
                        <li><strong>정보 디스플레이:</strong> 상품 정보 및 가격 표시</li>
                        <li><strong>강화학습 기반 보행:</strong> Open AI와 PyBullet을 활용한 안정적인 보행 구현</li>
                        <li><strong>실시간 원격 통신:</strong> 로봇 상태 및 영상 데이터의 실시간 송수신</li>
                        <li><strong>센서 데이터 모니터링:</strong> 로봇 관절 데이터 실시간 측정 및 이상 감지</li>
                    </ul>

                    <h3>사용 기술</h3>
                    <ul>
                        <li><strong>하드웨어:</strong> 라즈베리파이(임베디드 시스템 제어), 아두이노(모터 제어)</li>
                        <li><strong>컴퓨터 비전:</strong> OpenCV, 라즈베리파이 카메라</li>
                        <li><strong>머신러닝:</strong> 강화학습 (Open AI, PyBullet)</li>
                        <li><strong>센서 기술:</strong> 적외선 센서, 바코드 리더</li>
                        <li><strong>통신:</strong> 실시간 데이터 송수신 프로토콜</li>
                        <li><strong>모터 제어:</strong> PWM 기술을 이용한 정밀 속도 제어</li>
                    </ul>

                    <h3>주요 도전 과제 및 해결 방법</h3>
                    <ul>
                        <li><strong>불균일한 환경에서의 안정적 보행:</strong> 강화학습 모델을 실제 환경에 적용하여 해결</li>
                        <li><strong>실시간 데이터 처리:</strong> 효율적인 알고리즘 설계와 하드웨어 최적화를 통해 지연 최소화</li>
                        <li><strong>다중 센서 데이터 통합:</strong> 센서 퓨전 기술을 활용하여 정확도 향상</li>
                        <li><strong>전력 관리:</strong> 효율적인 전력 소비를 위한 알고리즘 최적화</li>
                    </ul>

                    <h3>프로젝트 결과</h3>
                    <p>개발된 로봇 시스템은 복잡한 실내 환경에서 안정적으로 작동하며, 사용자 추적, 상품 인식, 장애물 회피 등의 기능을 성공적으로 수행합니다. 실시간 원격 모니터링 및 제어 시스템을 통해 효율적인 관리가 가능하며, 강화학습을 통한 보행 능력 향상으로 다양한 지형에서의 안정적인 이동이 가능합니다.</p>

                    <img src="./images/pro3.png" alt="로봇 시스템 데모" style="max-width: 100%; height: auto;">

                    <a href="./documents/intelligent_robot_project.pdf" target="_blank" class="project-pdf-link">프로젝트 상세 보고서 (PDF)</a>
                `
            },
            {
                title: '스마트 미세먼지 모니터링 및 제어 시스템',
                image: './images/pro4.png',  // 프로젝트 대표 이미지 경로
                description: '아두이노와 앱인벤터를 활용한 자동 미세먼지 감지 및 창문 제어 시스템',
                details: `
                    <h3>프로젝트 개요</h3>
                    <p>이 프로젝트는 실내 공기 질을 자동으로 모니터링하고 관리하는 스마트 시스템을 개발하는 것을 목표로 합니다. 미세먼지 농도에 따라 자동으로 창문을 제어하고, 사용자에게 실시간으로 정보를 제공하며, 원격 제어 기능을 갖춘 종합적인 솔루션을 구현했습니다.</p>

                    <h3>주요 기능</h3>
                    <ul>
                        <li><strong>미세먼지 농도 측정:</strong> 전용 센서를 통한 실시간 미세먼지 농도 모니터링</li>
                        <li><strong>시각적 알림:</strong> 3색 LED를 통한 미세먼지 심각도 표시 (예: 녹색-양호, 황색-주의, 적색-위험)</li>
                        <li><strong>자동 창문 제어:</strong> 서보 모터를 이용한 미세먼지 농도 기반 자동 창문 개폐</li>
                        <li><strong>원격 제어:</strong> 블루투스 모듈(HC-06)을 통한 스마트폰 앱 연동 및 원격 제어</li>
                        <li><strong>정보 디스플레이:</strong> LCD 화면을 통한 실시간 미세먼지 농도 및 대기 오염 정도 표시</li>
                    </ul>

                    <h3>사용 기술</h3>
                    <ul>
                        <li><strong>하드웨어:</strong> 아두이노, 미세먼지 감지 센서, 서보 모터, 3색 LED, LCD 디스플레이, HC-06 블루투스 모듈</li>
                        <li><strong>소프트웨어:</strong> 아두이노 IDE, MIT App Inventor</li>
                        <li><strong>통신:</strong> 블루투스 프로토콜</li>
                        <li><strong>데이터 처리:</strong> 실시간 센서 데이터 분석 및 의사결정 알고리즘</li>
                    </ul>

                    <h3>구현 과정 및 도전 과제</h3>
                    <ol>
                        <li><strong>센서 캘리브레이션:</strong> 정확한 미세먼지 농도 측정을 위한 센서 보정 작업 수행</li>
                        <li><strong>모터 제어 최적화:</strong> 부드럽고 정확한 창문 개폐를 위한 서보 모터 제어 알고리즘 개발</li>
                        <li><strong>전력 소비 최적화:</strong> 배터리 수명 연장을 위한 저전력 모드 구현</li>
                        <li><strong>사용자 인터페이스 설계:</strong> 직관적이고 사용하기 쉬운 모바일 앱 인터페이스 개발</li>
                        <li><strong>안정적인 무선 통신:</strong> 블루투스 연결의 안정성 확보 및 통신 프로토콜 최적화</li>
                    </ol>

                    <h3>프로젝트 결과 및 의의</h3>
                    <p>개발된 시스템은 실내 공기 질을 효과적으로 모니터링하고 관리할 수 있는 능력을 보여주었습니다. 사용자들은 실시간으로 미세먼지 농도를 확인하고, 필요에 따라 원격으로 창문을 제어할 수 있게 되었습니다. 이 프로젝트를 통해 IoT 기술과 환경 모니터링의 융합 가능성을 탐구하였으며, 실생활에 직접 적용 가능한 솔루션을 개발하는 경험을 쌓았습니다.</p>

                    <img src="./images/pro4-1.png" alt="미세먼지 모니터링 시스템 데모" style="max-width: 100%; height: auto;">

                    <div class="project-links">
                        <a href="./documents/smart_dust_monitor_project.pdf" target="_blank" class="project-pdf-link">프로젝트 상세 보고서 (PDF)</a>
                        <button class="video-btn" data-video="smart_dust_monitor_demo">데모 비디오 보기</button>
                    </div>
                `
            },
            {
                title: '전기조명설비 자동화 모듈',
                image: './images/lighting-automation.svg',
                description: 'STM32 Cube IDE와 LoRa 통신으로 구현한 조명 자동화 제어 모듈',
                details: `
                    <h3>프로젝트 개요</h3>
                    <p>이 프로젝트는 전기조명설비 자동화를 위한 임베디드 모듈을 개발하는 것을 목표로 했습니다. C 언어로 STM32 기반 제어 보드를 구현하고, LoRa E220-900T22D 모듈을 활용해 조명 상태와 센서 데이터를 수집하며 관제 서버의 명령에 따라 조명을 원격 제어할 수 있게 구성했습니다.</p>

                    <h3>주요 기능</h3>
                    <ul>
                        <li><strong>센서 데이터 수집:</strong> PIR 센서를 통해 사람 감지 정보를 수집하고, CDS 조도 센서로 조명 환경 정보를 측정합니다.</li>
                        <li><strong>상태 정보 송신:</strong> 전등 ON/OFF 상태와 조도 데이터를 주기적으로 전송해 관제 시스템에서 모니터링할 수 있게 구현했습니다.</li>
                        <li><strong>원격 제어:</strong> 관제 서버로부터 전등 전체 ON/OFF 명령과 꺼지는 시간 설정 패킷을 받아 실행합니다.</li>
                        <li><strong>고장 상태 확인:</strong> 전등이 꺼져 있거나 과도하게 작동하는 상황을 분석해 고장 여부를 판단할 수 있도록 설계했습니다.</li>
                    </ul>

                    <h3>개발 과정에서의 문제와 해결</h3>
                    <ol>
                        <li><strong>PIR 센서 오감지:</strong> PIR 센서의 가변저항 조정만으로는 오감지가 줄지 않아 불필요한 조명 점등이 발생했습니다.</li>
                        <li><strong>송수신 시 센서 튐 현상:</strong> 오실로스코프로 원인을 확인한 결과, 패킷 송수신 시 PIR 센서가 튀는 현상을 발견했습니다. 소프트웨어적으로 패킷 송수신 구간에는 PIR 감지를 차단해 문제를 해결했습니다.</li>
                        <li><strong>LoRa 통신 패킷 누락:</strong> 모듈 20대 규모 환경에서 송신 중 수신 패킷이 누락되는 현상이 발생해, 누락된 모듈을 식별하고 재전송하는 로직을 추가해 안정성을 높였습니다.</li>
                    </ol>

                    <h3>학습 및 성장</h3>
                    <p>이 프로젝트는 임베디드 소프트웨어 현업에서 처음으로 진행한 프로젝트였고, 문제 발생 지점을 스스로 점검하는 능력을 키울 수 있었습니다. 멀티미터와 오실로스코프를 활용해 전압·전류와 센서 신호를 확인하는 과정은 이후 임베디드 분야를 넘어 다양한 문제 상황에서도 원인을 빠르게 파악하는 데 큰 도움이 되었습니다.</p>

                    <div class="project-links">
                        <a href="./documents/Utility_Tunnel_Lighting_Electricity_Control.pdf" target="_blank" class="project-pdf-link">프로젝트 참고 자료(PDF) 보기</a>
                        <a href="./documents/lighting_automation_module.md" target="_blank" class="project-pdf-link">프로젝트 참고 자료(MD) 보기</a>
                        <button class="video-btn" data-video="Utility_Tunnel_Lighting_Electricity_Control_test1">데모 비디오 1 보기</button>
                        <button class="video-btn" data-video="Utility_Tunnel_Lighting_Electricity_Control_test2">데모 비디오 2 보기</button>
                    </div>
                `
            }
        ];

        function displayProject(index) {
            const project = projects[index];
            projectsContainer.innerHTML = `
                <div class="project visible">
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

            // 비디오 버튼들에 이벤트 리스너 추가
            const videoBtns = projectsContainer.querySelectorAll('.video-btn');
            videoBtns.forEach((videoBtn) => {
                videoBtn.addEventListener('click', () => {
                    const videoName = videoBtn.getAttribute('data-video');
                    openVideoModal(videoName);
                });
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

// 비디오 모달 열기 함수
function openVideoModal(videoName) {
    const videoUrl = `./videos/${videoName}.mp4`;
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content">
            <span class="close-modal">&times;</span>
            <video controls width="100%">
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    `;
    document.body.appendChild(modal);

    // 모달 닫기 버튼 이벤트 리스너
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}
