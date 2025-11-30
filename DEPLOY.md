# 웹 호스팅 업로드 가이드

엄마 생일 편지 사이트를 웹에 업로드하는 방법입니다.

## 🚀 빠른 배포 (가장 간편)

### Netlify Drop 사용 (1분 완성)

1. **https://app.netlify.com/drop** 접속
2. `편지` 폴더 전체를 드래그 앤 드롭
3. 자동으로 배포 완료! URL이 생성됩니다
4. 완료! 바로 모바일에서 접속 가능

**장점:** 
- 별도 가입 불필요 (선택사항)
- 자동 HTTPS
- 무료
- 빠름

---

## 📱 GitHub Pages (무료, 안정적)

### 1단계: GitHub 저장소 생성
1. GitHub.com 가입/로그인
2. 우측 상단 "+" → "New repository"
3. 저장소 이름: `mom-birthday-letter` (또는 원하는 이름)
4. Public으로 설정
5. "Create repository" 클릭

### 2단계: 파일 업로드
1. 생성된 페이지에서 "uploading an existing file" 클릭
2. `편지` 폴더의 모든 파일을 드래그 앤 드롭
3. "Commit changes" 클릭

### 3단계: GitHub Pages 활성화
1. 저장소 페이지에서 "Settings" 탭
2. 왼쪽 메뉴에서 "Pages" 클릭
3. Source를 "Deploy from a branch" 선택
4. Branch를 "main" 선택
5. "Save" 클릭

### 4단계: 접속
- 몇 분 후: `https://[사용자명].github.io/mom-birthday-letter` 접속
- 예: `https://yourname.github.io/mom-birthday-letter`

---

## ⚡ Vercel (매우 빠름)

1. **https://vercel.com** 가입
2. "Add New..." → "Project"
3. "Import Git Repository" 또는 폴더 드래그
4. 자동 배포 완료

---

## 📋 업로드 전 최종 체크리스트

### 필수 파일 확인
- [ ] `index.html`
- [ ] `style.css`
- [ ] `script.js`
- [ ] `나눔손글씨 가람연꽃.ttf`
- [ ] `Cityscape background.jpg`

### 폴더 구조 확인
- [ ] `images/` 폴더
- [ ] `images/handwritten.jpg` 파일 (손편지 이미지)
- [ ] `images/photos/` 폴더 (사진 파일들)
- [ ] `letters/` 폴더 (JSON 파일들)
- [ ] `sounds/` 폴더 (소리 파일, 선택사항)

### 내용 확인
- [ ] 편지 내용 확인 (`script.js`의 `letterData`)
- [ ] 비밀번호 확인 (기본: 7135)
- [ ] 이미지 파일명 확인 (handwritten.jpg, photo1.jpg 등)

---

## 🔗 업로드 후 확인사항

1. **모바일에서 접속 테스트**
   - 비밀번호 입력 화면이 보이는지
   - 편지 봉투가 잘 보이는지
   - 편지 내용이 잘 표시되는지
   - 사진 갤러리가 작동하는지

2. **문제 발생 시**
   - 브라우저 개발자 도구 (F12) → Console 확인
   - 파일 경로가 올바른지 확인
   - 이미지 파일이 업로드되었는지 확인

---

## 💡 팁

### 커스텀 도메인 (선택사항)
- Netlify/Vercel에서 무료로 커스텀 도메인 연결 가능
- 예: `mom-letter.yourname.com`

### 매년 업데이트
- 편지 내용만 수정하고 다시 업로드
- 또는 GitHub에 새 파일 추가 후 자동 배포

### 보안
- 현재는 프론트엔드 비밀번호 (보안 수준 낮음)
- 중요한 내용은 이미지로만 공유 권장

---

## 📞 도움이 필요하면

1. 파일 구조 확인
2. 브라우저 콘솔 에러 확인
3. 파일 경로 확인 (대소문자 구분)

---

**엄마에게 특별한 선물을!** 💕

