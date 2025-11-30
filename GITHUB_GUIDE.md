# GitHub Pages 업로드 가이드 📚

엄마 생일 편지 사이트를 GitHub Pages로 무료 호스팅하는 방법입니다.

## 1단계: GitHub 저장소 생성

1. **GitHub.com 접속 및 로그인**
   - https://github.com
   - 계정이 없으면 가입 (무료)

2. **새 저장소 생성**
   - 우측 상단 "+" 버튼 클릭
   - "New repository" 선택
   - Repository name: `mom-birthday-letter` (또는 원하는 이름)
   - Description: "엄마 생일 편지" (선택사항)
   - **Public** 선택 (Private은 유료)
   - "Add a README file" 체크 해제
   - "Create repository" 클릭

## 2단계: 파일 업로드

### 방법 A: 웹 브라우저에서 직접 업로드 (간단)

1. 저장소 페이지에서 **"uploading an existing file"** 링크 클릭
2. `편지` 폴더의 모든 파일을 드래그 앤 드롭:
   - `index.html`
   - `style.css`
   - `script.js`
   - `나눔손글씨 가람연꽃.ttf`
   - `Cityscape background.jpg`
   - `README.md` (선택사항)
   - `images/` 폴더 전체
   - `letters/` 폴더 전체
   - `sounds/` 폴더 전체
3. 하단에 "Commit changes" 클릭

### 방법 B: GitHub Desktop 사용 (더 편함)

1. **GitHub Desktop 다운로드**
   - https://desktop.github.com
   - 설치 및 로그인

2. **저장소 클론**
   - File → Clone repository
   - 방금 만든 저장소 선택
   - 로컬 폴더 선택

3. **파일 복사**
   - `편지` 폴더의 모든 파일을 클론된 폴더로 복사

4. **업로드**
   - GitHub Desktop에서 변경사항 확인
   - "Commit to main" 클릭
   - "Push origin" 클릭

## 3단계: GitHub Pages 활성화

1. 저장소 페이지에서 **"Settings"** 탭 클릭
2. 왼쪽 메뉴에서 **"Pages"** 클릭
3. Source 섹션:
   - Branch: **"main"** 선택
   - Folder: **"/ (root)"** 선택
   - **"Save"** 클릭

4. 몇 분 후 활성화됨
   - 초록색 메시지와 함께 URL 표시
   - 예: `https://[사용자명].github.io/mom-birthday-letter`

## 4단계: 접속 확인

- 표시된 URL을 클릭하거나 직접 접속
- 비밀번호 입력 화면이 보이면 성공!

## 📝 업로드 후 업데이트 방법

### 이미지 추가하기

1. GitHub 저장소 페이지에서
2. `images/` 폴더로 이동
3. "Add file" → "Upload files"
4. 이미지 파일 드래그 앤 드롭
5. "Commit changes" 클릭
6. 자동으로 사이트에 반영됨 (몇 분 소요)

### 편지 내용 수정하기

1. `script.js` 파일 클릭
2. 연필 아이콘 (Edit) 클릭
3. 편지 내용 수정
4. "Commit changes" 클릭

## ⚠️ 주의사항

1. **파일 경로**
   - 모든 상대 경로는 올바르게 유지
   - 파일명 대소문자 확인

2. **이미지 파일**
   - 이미지가 없어도 사이트는 작동
   - 나중에 추가 가능
   - 이미지 추가 시 자동 반영

3. **비밀번호**
   - `script.js`에서 변경 가능
   - 변경 후 커밋하면 바로 반영

## 🔗 URL 공유

업로드 완료 후:
- URL: `https://[사용자명].github.io/mom-birthday-letter`
- 이 URL을 엄마에게 공유하면 모바일에서 접속 가능!

---

**준비되셨으면 바로 시작하세요!** 🚀

