# 👨‍💻 Dev-Joon's Profile Project

> **성장하는 개발자 Joon 입니다.** 이 프로젝트는 저의 개인 프로필 카드와 포트폴리오 리스트를 보여줍니다.

---

### 🖥️ Interactive Preview (Demo)
![Profile Preview]("#")
<p align="center">
  <br>
  <a href="https://github.com/Dev-Joon/my_profile">
    <img src="https://img.shields.io/badge/GitHub-Visit-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.youtube.com/channel/UChPsJpHd9peK1hXR5DiXXWw?sub_confirmation=1">
    <img src="https://img.shields.io/badge/Youtube-Visit-red?style=for-the-badge&logo=youtube" alt="Youtube">
  </a>
  <a href="https://instagram.com">
    <img src="https://img.shields.io/badge/Instagram-Visit-E4405F?style=for-the-badge&logo=instagram" alt="Instagram">
  </a>
</p>

---

### 🛠️ Tech Stack & Structure

이 프로젝트는 유지보수를 위해 구조화되어 있습니다.

* **HTML5 / CSS3**: `main.css`를 통한 카드 디자인 및 반응형 레이아웃 (`.wrap`, `.card_bg`)
* **JavaScript (ES6)**: `main.js`에서 카테고리 필터링 및 리스트 내비게이션 구현
* **Structure**:
    ```text
    ├── index.html
    └── src/
        ├── css/main.css
        ├── js/main.js   <-- 비즈니스 로직 분리
        └── images/
    ```

<details>
<summary><b>핵심 로직(main.js) 살펴보기</b></summary>

```javascript
// 필터 버튼 클릭 시 카테고리 전환 로직
const filterBtns = document.querySelectorAll('.filter_btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 카테고리 변경 및 리스트 렌더링 로직...
    });
});