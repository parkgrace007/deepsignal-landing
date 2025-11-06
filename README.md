# 🚀 딥시그널 (DeepSignal) - AI 자동 매매 시스템 랜딩페이지

> 딥시크 기반 AI 자동 매매 시스템의 공식 랜딩페이지

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployment: GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue.svg)](https://pages.github.com/)

---

## 📋 프로젝트 소개

**딥시그널**은 선물대회 1등 알고리즘을 기반으로 한 AI 자동 매매 시스템입니다.
- 연평균 수익률 412%* 백테스팅 검증 완료
- 원버튼으로 3분 만에 시작
- 7일 무료체험 제공

*2021-2024 백테스팅 결과, 과거 수익률이 미래 수익을 보장하지 않습니다.

---

## ✨ 주요 기능

### 1. 🎨 모던한 디자인
- 다크 테마 + 노란색(#ffc600) 포인트 컬러
- 모바일 우선 반응형 디자인
- 부드러운 스크롤 애니메이션

### 2. 📱 완벽한 반응형
- 모바일 (375px~)
- 태블릿 (768px~)
- 데스크톱 (1920px~)

### 3. 🔄 구글 시트 연동
- 실시간 신청서 데이터 수집
- Apps Script 자동 저장
- 신청일시, 접속경로 자동 기록

### 4. 🎬 풍부한 미디어
- 히어로 섹션 비디오 배경
- 브랜드 로고 애니메이션
- 커스텀 아이콘

---

## 📁 파일 구조

```
Deepland/
├── index.html                      # 메인 랜딩페이지
├── DEEPLOG.png                     # 딥시그널 로고
├── hero-video.mp4                  # 히어로 섹션 배경 비디오
├── 2back.jpg                       # 섹션 배경 이미지
├── icon-plug.png                   # API 연결 아이콘
├── icon-coin.png                   # 금액 설정 아이콘
├── icon-play.png                   # 시작 버튼 아이콘
├── google-apps-script.js           # 구글 시트 연동 스크립트
├── GitHub_Pages_배포_가이드.md      # GitHub Pages 배포 가이드
├── 구글시트_연동_가이드.md          # 구글 시트 설정 가이드
├── 배포_체크리스트.md               # 배포 전 체크리스트
└── README.md                       # 프로젝트 문서 (이 파일)
```

---

## 🚀 빠른 시작

### 1. 로컬에서 실행
```bash
# 파일 다운로드 또는 클론
cd Deepland

# index.html을 브라우저로 열기
open index.html  # macOS
start index.html # Windows
```

### 2. GitHub Pages 배포
자세한 내용은 [`GitHub_Pages_배포_가이드.md`](./GitHub_Pages_배포_가이드.md)를 참고하세요.

```bash
1. GitHub 레포지토리 생성 (Public)
2. 모든 파일 업로드
3. Settings > Pages에서 활성화
4. https://사용자명.github.io/레포명/ 접속
```

---

## ⚙️ 구글 시트 연동 설정

### 필수 설정 단계:

1. **구글 시트 생성**
   - 새 스프레드시트 생성
   - 시트 이름: "신청서"

2. **Apps Script 배포**
   - `google-apps-script.js` 코드 복사
   - 확장 프로그램 > Apps Script
   - 웹 앱으로 배포

3. **URL 설정**
   ```javascript
   // index.html 1446번째 줄
   const GOOGLE_SCRIPT_URL = '여기에_웹앱_URL_입력';
   ```

자세한 내용은 [`구글시트_연동_가이드.md`](./구글시트_연동_가이드.md)를 참고하세요.

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--bg-primary: #0a0a0a;        /* 메인 배경 */
--bg-secondary: #111111;      /* 카드 배경 */
--accent-yellow: #ffc600;     /* 포인트 컬러 */
--text-primary: #ffffff;      /* 메인 텍스트 */
--text-secondary: rgba(255, 255, 255, 0.65); /* 보조 텍스트 */
```

### 타이포그래피
- **폰트**: Pretendard, Apple SD Gothic Neo
- **제목**: 24px~36px, 굵게(700-800)
- **본문**: 14px~18px, 보통(400-500)

### 반응형 브레이크포인트
```css
/* 모바일 */
@media (max-width: 480px) { ... }

/* 데스크톱 */
@media (min-width: 768px) { ... }
```

---

## 📊 페이지 섹션

### 1. 히어로 섹션
- 로고 + 캐치프레이즈
- 비디오 배경
- CTA 버튼
- 백테스팅 결과

### 2. 원버튼으로 끝, 딥시그널
- 3단계 플로우 (API 연결 → 금액 설정 → 시작)
- 완료 시간 표시

### 3. 딥시그널 AI 가 하는일
- 7단계 자동화 프로세스
- 실시간 차트 분석부터 3중 안전장치까지

### 4. 백테스팅 결과
- 연평균 412% 수익률
- 2021-2024 그래프
- 무료체험 혜택

### 5. 신청 모달
- 이름 + 연락처 입력
- 구글 시트 자동 전송
- 실시간 피드백

---

## 🔧 커스터마이징

### 색상 변경
```css
/* index.html의 <style> 섹션에서 */
--accent-yellow: #ffc600; /* 이 값을 변경 */
```

### 텍스트 수정
```html
<!-- index.html에서 직접 수정 -->
<h1 class="hero-title">여기에 원하는 텍스트</h1>
```

### 이미지 교체
- 같은 파일명으로 교체
- 또는 `src="파일명"` 부분을 수정

---

## 📱 브라우저 지원

| 브라우저 | 지원 버전 |
|---------|---------|
| Chrome  | ✅ 최신 |
| Safari  | ✅ 최신 |
| Edge    | ✅ 최신 |
| Firefox | ✅ 최신 |
| Samsung Internet | ✅ 최신 |

---

## 🐛 알려진 이슈

### 해결된 이슈:
- ✅ 모바일에서 비디오 자동재생 (playsinline 속성 추가)
- ✅ 구글 시트 CORS 문제 (no-cors 모드 사용)

### 현재 제한사항:
- 비디오 파일 크기 제한 (GitHub: 100MB)
- 구글 Apps Script 일일 호출 제한 (무료: 20,000회)

---

## 📈 성능 최적화

### 이미지 최적화
- 로고: PNG (투명 배경 필요)
- 배경: JPG (용량 절감)
- 아이콘: PNG (100x100px)

### 비디오 최적화
- 포맷: MP4 (H.264 코덱)
- 해상도: 1080x1920 (모바일 세로)
- 용량: 10MB 이하 권장

---

## 🔐 보안 고려사항

### 구글 시트 보안
- Apps Script는 서버리스로 안전
- 출금 불가 API 사용 (자산 보호)
- 개인정보는 구글 시트에만 저장

### HTTPS
- GitHub Pages 자동 적용
- SSL 인증서 무료 제공

---

## 📞 문의

프로젝트 관련 문의:
- 이슈 등록: [GitHub Issues](https://github.com/사용자명/deepsignal-landing/issues)
- 이메일: contact@deepsignal.ai

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

---

## 🙏 감사의 말

- **Claude Code** - AI 어시스턴트
- **GitHub Pages** - 무료 호스팅
- **Google Apps Script** - 무료 백엔드

---

## 🔄 업데이트 로그

### v1.0.0 (2025-01-06)
- ✨ 초기 릴리즈
- 🎨 다크 테마 디자인
- 📱 모바일 반응형
- 🔄 구글 시트 연동
- 🎬 비디오 배경

---

## 🚀 다음 계획

- [ ] Google Analytics 연동
- [ ] A/B 테스팅 구현
- [ ] 다국어 지원 (영문)
- [ ] FAQ 섹션 추가
- [ ] 실제 사용자 후기 섹션

---

**Made with ❤️ for DeepSignal**
