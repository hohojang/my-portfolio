<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Jangho Park's Portfolio</title>
    
    <!-- CSS 파일 및 폰트 링크 -->
    <link rel="stylesheet" href="styles/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
    <!-- JavaScript 라이브러리 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/TextPlugin.min.js"></script>
    
    <!-- 카카오톡 링크 미리보기 메타 태그 -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://hohojang.github.io/my-portfolio/">
    <meta property="og:title" content="박장호 포트폴리오 [PJH's Portfolio]">
    <meta property="og:description" content="박장호의 개발자 포트폴리오 웹사이트입니다.">
    <meta property="og:image" content="https://raw.githubusercontent.com/hohojang/my-portfolio/main/images/portfolio-preview.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="description" content="박장호 포트폴리오 [PJH's Portfolio]">
    <link rel="image_src" href="https://raw.githubusercontent.com/hohojang/my-portfolio/main/images/portfolio-preview.png">
</head>
<body class="loading">
    <div class="book">
        <div class="page cover">
            <h1>Jangho Park's Portfolio</h1>
            <p class="subtitle">Developer</p>
        </div>
        <div class="page" id="about">
            <h2>About Me</h2>
            <img src="https://raw.githubusercontent.com/hohojang/my-portfolio/main/images/profile-photo.jpg" alt="Profile Photo" class="profile-photo">
            <div id="typing-container"></div>
            <div id="next-page-bubble" class="bubble">다음 페이지 버튼을 눌러주세요!</div>
        </div>
        <div class="page" id="education">
            <h2>Education & Certifications</h2>
            <div id="education-content">
                <div class="education-section" id="education-section">
                    <h3>Education</h3>
                </div>
                <div class="education-section" id="certifications-section">
                    <h3>Certifications</h3>
                </div>
                <div class="education-section" id="militaryService-section">
                    <h3>Military Service</h3>
                </div>
            </div>
        </div>
        <div class="page" id="skills">
            <h2>Skills</h2>
            <div class="skills-container"></div>
        </div>
        <div class="page" id="projects">
            <h2>Projects</h2>
            <div class="project-container"></div>
        </div>
        <div class="page" id="contact">
            <h2>Contact Information</h2>
            <div class="contact-info">
                <a href="mailto:yuunnyso123@gmail.com" class="contact-item">
                    <i class="fas fa-envelope"></i> Email
                </a>
                <div class="contact-item">
                    <i class="fas fa-phone"></i> 010-6503-5245
                </div>
                <a href="https://github.com/hohojang/my-portfolio" target="_blank" class="contact-item">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
        <div class="page back-cover">
            <p>&copy; 2024 Jangho Park. All rights reserved.</p>
        </div>
    </div>
    <div class="page-curl"></div>
    <div class="controls">
        <button id="prevBtn">이전</button>
        <button id="nextBtn">다음</button>
    </div>

    <!-- JavaScript 파일 -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="scripts/main.js"></script>
</body>
</html>
