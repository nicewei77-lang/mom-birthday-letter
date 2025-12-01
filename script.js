// 연도별 편지 데이터 캐시
const letterDataCache = {};

let currentYear = null;
const PASSWORD = '7135';

// DOM 요소 변수
let envelope, envelopeWrapper, letterContent, paperSound, yearSelector;
let passwordWrapper, passwordInput, passwordError;
let isOpened = false;

// 비밀번호 확인
function checkPassword() {
    if (!passwordInput || !passwordWrapper || !yearSelector || !passwordError) {
        console.error('DOM 요소가 아직 초기화되지 않았습니다.');
        return;
    }
    
    const input = passwordInput.value.trim();
    
    if (input === PASSWORD) {
        // 비밀번호 맞음
        passwordError.textContent = '';
        passwordWrapper.style.display = 'none';
        yearSelector.style.display = 'flex';
    } else {
        // 비밀번호 틀림
        passwordError.textContent = '비밀번호가 올바르지 않습니다.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// 페이지 로드 시 초기화
window.addEventListener('DOMContentLoaded', function() {
    // DOM 요소 초기화
    envelope = document.getElementById('envelope');
    envelopeWrapper = document.getElementById('envelopeWrapper');
    letterContent = document.getElementById('letterContent');
    paperSound = document.getElementById('paperSound');
    yearSelector = document.getElementById('yearSelector');
    passwordWrapper = document.getElementById('passwordWrapper');
    passwordInput = document.getElementById('passwordInput');
    passwordError = document.getElementById('passwordError');
    
    // 초기 상태: 비밀번호 화면 표시
    if (passwordWrapper) {
        passwordWrapper.style.display = 'flex';
    }
    
    if (yearSelector) {
        yearSelector.style.display = 'none';
    }
    
    // 항상 비밀번호 입력 필요 (매번 새로 입력)
    if (passwordInput) {
        passwordInput.focus();
        
        // Enter 키로 비밀번호 입력
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    // 편지 봉투 클릭 이벤트
    if (envelope) {
        envelope.addEventListener('click', function() {
            if (isOpened) return;
            
            isOpened = true;
            
            // 소리 재생 (파일이 있으면)
            if (paperSound) {
                paperSound.play().catch(e => {
                    console.log('소리 재생 실패 (선택사항):', e);
                });
            }
            
            // 봉투 열기 애니메이션
            envelope.classList.add('opening');
            
            // 봉투가 열리고 편지가 나온 후 전체 편지 내용 표시
            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
                letterContent.classList.add('show');
                
                // 스크롤 애니메이션 시작
                initScrollAnimations();
                
                // 사진 갤러리 초기화 (데이터가 있는 경우만)
                loadLetterData(currentYear).then(data => {
                    if (data && data.photos && data.photos.length > 0) {
                        initPhotoGallery();
                    }
                });
                
                // 하트 효과 시작
                startHearts();
            }, 1200); // 봉투 열기 + 편지 나오기 애니메이션 완료 후
        });
    }
    
    // 연도 선택 버튼 이벤트
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const year = parseInt(this.dataset.year);
            selectYear(year);
        });
    });
});

// 스크롤 페이드인 애니메이션
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 사진 갤러리
let photoIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function initPhotoGallery() {
    const slider = document.getElementById('photoSlider');
    const dotsContainer = document.getElementById('photoDots');
    const slides = slider.querySelectorAll('.photo-slide');
    
    // 도트 생성
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToPhoto(index));
        dotsContainer.appendChild(dot);
    });
    
    // 터치 이벤트
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && photoIndex < slides.length - 1) {
                goToPhoto(photoIndex + 1);
            } else if (diff < 0 && photoIndex > 0) {
                goToPhoto(photoIndex - 1);
            }
        }
    });
    
    // 마우스 드래그 지원 (선택사항)
    slider.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        isDragging = true;
        slider.style.cursor = 'grabbing';
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
    });
    
    slider.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.cursor = 'grab';
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0 && photoIndex < slides.length - 1) {
                goToPhoto(photoIndex + 1);
            } else if (diff < 0 && photoIndex > 0) {
                goToPhoto(photoIndex - 1);
            }
        }
    });
    
    slider.addEventListener('mouseleave', () => {
        isDragging = false;
        slider.style.cursor = 'grab';
    });
}

function goToPhoto(index) {
    photoIndex = index;
    const slider = document.getElementById('photoSlider');
    const dots = document.querySelectorAll('.dot');
    
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// 떨어지는 하트
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['💕', '💖', '💗', '❤️'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '-30px'; // 화면 밖에서 시작
    heart.style.animationDuration = (Math.random() * 4 + 5) + 's'; // 5-9초로 더 천천히
    heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
    // animationDelay 제거 - 자연스럽게 바로 떨어지도록
    
    const container = document.querySelector('.hearts-container');
    if (container) {
        container.appendChild(heart);
        
        // 애니메이션 시간보다 약간 길게 대기 후 제거
        const duration = parseFloat(heart.style.animationDuration);
        setTimeout(() => {
            heart.remove();
        }, (duration + 1) * 1000);
    }
}

function startHearts() {
    // 편지가 펼쳐진 후에만 하트 시작 - 더 천천히, 적게 떨어지도록
    setInterval(createHeart, 2000); // 600ms -> 2000ms (2초마다)
}

// JSON 파일에서 편지 데이터 로드
async function loadLetterData(year) {
    // 캐시에 있으면 캐시에서 반환
    if (letterDataCache[year]) {
        return letterDataCache[year];
    }
    
    try {
        const response = await fetch(`letters/${year}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 캐시에 저장
        letterDataCache[year] = data;
        return data;
    } catch (error) {
        console.error(`편지 데이터 로드 실패 (${year}년):`, error);
        alert(`해당 연도(${year}년)의 편지 데이터를 불러올 수 없습니다.\n\nletters/${year}.json 파일을 확인해주세요.`);
        return null;
    }
}

async function selectYear(year) {
    currentYear = year;
    
    // 편지 데이터 가져오기
    const data = await loadLetterData(year);
    if (!data) {
        return;
    }
    
    // 연도 선택 화면 숨기기
    yearSelector.style.display = 'none';
    
    // 편지 봉투에 연도 표시
    const envelopeYear = document.getElementById('envelopeYear');
    if (envelopeYear) {
        envelopeYear.textContent = data.date;
    }
    
    // 편지 봉투 화면 표시
    envelopeWrapper.style.display = 'flex';
    
    // 편지 내용 미리 로드
    await loadLetterContent(year);
    
    // 편지가 다시 열 수 있도록 초기화
    isOpened = false;
    envelope.classList.remove('opening');
    letterContent.classList.remove('show');
}

async function loadLetterContent(year) {
    const data = await loadLetterData(year);
    if (!data) return;
    
    // 타이핑 편지
    const typedLetter = document.getElementById('typedLetter');
    if (typedLetter) {
        typedLetter.innerHTML = data.typed;
    }
    
    // 손편지 이미지
    const handwrittenImage = document.getElementById('handwrittenImage');
    const handwrittenSection = document.getElementById('handwrittenSection');
    if (handwrittenImage && data.handwritten) {
        handwrittenImage.src = data.handwritten;
        // 이미지 로드 실패 시 섹션 숨기기
        handwrittenImage.onerror = function() {
            if (handwrittenSection) {
                handwrittenSection.style.display = 'none';
            }
        };
    } else if (handwrittenSection) {
        handwrittenSection.style.display = 'none';
    }
    
    // 사진 갤러리
    const photoSlider = document.getElementById('photoSlider');
    const gallerySection = document.getElementById('gallerySection');
    
    if (photoSlider && data.photos && data.photos.length > 0) {
        photoSlider.innerHTML = '';
        let loadedImages = 0;
        let totalImages = data.photos.length;
        
        data.photos.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'photo-slide';
            const img = document.createElement('img');
            img.src = photo;
            img.alt = `사진 ${index + 1}`;
            
            // 이미지 로드 실패 처리
            img.onerror = function() {
                loadedImages++;
                if (loadedImages === totalImages) {
                    // 모든 이미지가 실패하면 갤러리 섹션 숨기기
                    if (gallerySection) {
                        gallerySection.style.display = 'none';
                    }
                }
            };
            
            img.onload = function() {
                loadedImages++;
            };
            
            slide.appendChild(img);
            photoSlider.appendChild(slide);
        });
    } else {
        // 사진이 없으면 갤러리 섹션 숨기기
        if (gallerySection) {
            gallerySection.style.display = 'none';
        }
    }
}

// 뒤로 가기 버튼
function goBack() {
    // 편지 내용 숨기기
    letterContent.classList.remove('show');
    
    // 편지 봉투 숨기기
    envelopeWrapper.style.display = 'none';
    
    // 연도 선택 화면 다시 표시
    yearSelector.style.display = 'flex';
    
    // 상태 초기화
    isOpened = false;
    currentYear = null;
    envelope.classList.remove('opening');
    
    // 스크롤을 맨 위로
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

