이 폴더에는 연도별 편지 내용이 JSON 파일로 저장됩니다.

파일 형식:
- 2025.json
- 2026.json
- 2027.json (새 연도 추가 시)

각 JSON 파일 구조:
{
  "date": "2025년",                    // 표시될 날짜 텍스트
  "typed": "편지 내용...",             // 타이핑 편지 내용 (HTML 가능)
  "handwritten": "images/handwritten.jpg",  // 손편지 이미지 경로
  "photos": [                           // 사진 갤러리 이미지 경로 배열
    "images/photos/photo1.jpg",
    "images/photos/photo2.jpg"
  ]
}

새 연도 추가 방법:
1. letters/ 폴더에 {연도}.json 파일 생성
2. 위 형식에 맞춰 편지 내용 작성
3. index.html의 연도 선택 버튼 추가 (선택사항)

