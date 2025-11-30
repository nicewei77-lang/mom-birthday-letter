# 엄마 생일 편지 웹사이트 💌

엄마를 위한 특별한 생일 편지 모바일 웹사이트입니다.

## 기능

- 비밀번호 보호 (7135)
- 연도별 편지 관리 (2025년, 2026년)
- 편지 봉투 열기 애니메이션
- 타이핑 편지 + 손편지 이미지
- 사진 갤러리 (스와이프 가능)
- 떨어지는 하트 애니메이션
- 모바일 최적화

## 파일 구조

```
편지/
├── index.html              # 메인 페이지
├── style.css               # 스타일시트
├── script.js               # JavaScript
├── 나눔손글씨 가람연꽃.ttf  # 폰트 파일
├── Cityscape background.jpg # 배경 이미지
├── images/
│   ├── handwritten.jpg     # 손편지 이미지 (필수)
│   └── photos/             # 사진 갤러리
│       ├── photo1.jpg
│       ├── photo2.jpg
│       └── photo3.jpg
├── sounds/
│   └── paper-open.mp3      # 편지 열기 소리 (선택사항)
└── letters/
    ├── 2025.json           # 2025년 편지 데이터
    └── 2026.json           # 2026년 편지 데이터
```

## 웹 호스팅 가이드

### 1. GitHub Pages (무료, 추천)

1. GitHub 계정 생성 및 로그인
2. 새 저장소 생성 (예: `mom-birthday-letter`)
3. 모든 파일 업로드
4. Settings → Pages → Source를 "main" 브랜치로 설정
5. 몇 분 후 `https://[사용자명].github.io/mom-birthday-letter` 접속

### 2. Netlify (무료, 간편)

1. [netlify.com](https://netlify.com) 가입
2. "Add new site" → "Deploy manually"
3. 모든 파일을 폴더로 드래그 앤 드롭
4. 자동으로 배포 완료

### 3. Vercel (무료, 빠름)

1. [vercel.com](https://vercel.com) 가입
2. "New Project" 클릭
3. 폴더를 드래그 앤 드롭 또는 GitHub 연결
4. 자동 배포

## 업로드 전 체크리스트

- [ ] `images/handwritten.jpg` 파일 준비
- [ ] `images/photos/` 폴더에 사진 파일 준비
- [ ] `script.js` 파일의 편지 내용 확인 및 수정
- [ ] 비밀번호 확인 (기본값: 7135)
- [ ] 모든 파일이 올바른 폴더 구조로 정리되어 있는지 확인

## 모바일 테스트

- iPhone Safari
- Android Chrome
- 모바일 브라우저 개발자 도구

## 커스터마이징

### 편지 내용 수정
- `script.js` 파일의 `letterData` 객체 수정

### 비밀번호 변경
- `script.js` 파일의 `const PASSWORD = '7135';` 수정

### 새 연도 추가
1. `script.js`의 `letterData`에 새 연도 추가
2. `index.html`의 연도 버튼 추가

## 기술 스택

- HTML5
- CSS3 (애니메이션, 반응형)
- Vanilla JavaScript
- 커스텀 폰트 (나눔손글씨 가람연꽃)

## 브라우저 지원

- Chrome (권장)
- Safari
- Firefox
- Edge
- 모바일 브라우저 (iOS Safari, Android Chrome)

---

Made with 💕 for Mom

