# 🚀 GitHub Pages 배포 가이드

## 📋 준비물
- 구글 계정 (GitHub 로그인에 사용)
- 10분의 시간

---

## 🎯 1단계: GitHub 계정 만들기

### 옵션 A: 구글 계정으로 로그인
1. [GitHub.com](https://github.com) 접속
2. 우측 상단 **Sign up** 클릭
3. 이메일 입력 시 **구글 이메일** 사용
4. 비밀번호, 사용자명 설정
5. 이메일 인증 완료

### 옵션 B: 구글 계정 연동 (이미 GitHub 계정이 있다면)
1. GitHub 로그인
2. Settings > Account > Emails에서 구글 이메일 추가

---

## 📁 2단계: 레포지토리 생성

1. GitHub 로그인 후 우측 상단 **+** 버튼 클릭
2. **New repository** 선택
3. 레포지토리 설정:
   ```
   Repository name: deepsignal-landing
   Description: 딥시그널 AI 자동매매 랜딩페이지
   Public (공개) 선택 ⚠️ 중요!
   ✅ Add a README file 체크
   ```
4. **Create repository** 버튼 클릭

---

## 📤 3단계: 파일 업로드

### 방법 1: 웹 인터페이스 사용 (추천)

1. 생성된 레포지토리 페이지에서 **Add file > Upload files** 클릭

2. 다음 파일들을 드래그해서 업로드:
   ```
   ✅ index.html
   ✅ DEEPLOG.png
   ✅ hero-video.mp4
   ✅ 2back.jpg
   ✅ icon-plug.png
   ✅ icon-coin.png
   ✅ icon-play.png
   ```

3. 하단에 커밋 메시지 입력:
   ```
   Initial commit - 딥시그널 랜딩페이지
   ```

4. **Commit changes** 버튼 클릭

### 방법 2: GitHub Desktop 사용
1. [GitHub Desktop](https://desktop.github.com) 다운로드
2. 구글 계정으로 로그인
3. 레포지토리 클론
4. 파일 복사 후 커밋&푸시

---

## ⚙️ 4단계: GitHub Pages 활성화

1. 레포지토리 페이지에서 **Settings** 탭 클릭

2. 왼쪽 메뉴에서 **Pages** 클릭

3. **Source** 섹션에서:
   ```
   Branch: main (또는 master)
   Folder: / (root)
   ```

4. **Save** 버튼 클릭

5. 페이지 상단에 다음과 같은 주소가 나타남:
   ```
   Your site is published at https://사용자명.github.io/deepsignal-landing/
   ```

6. 🎉 완료! 1~2분 기다리면 사이트가 활성화됩니다

---

## 🔗 5단계: 사이트 확인

1. 제공된 URL 클릭:
   ```
   https://사용자명.github.io/deepsignal-landing/
   ```

2. 랜딩페이지가 정상적으로 표시되는지 확인

3. 모바일에서도 테스트:
   - 브라우저 개발자 도구 (F12)
   - 디바이스 모드로 전환
   - 또는 실제 모바일로 접속

---

## 📱 6단계: 신청 폼 테스트

1. **무료 체험하기** 버튼 클릭
2. 테스트 정보 입력
3. 구글 시트에 데이터가 들어가는지 확인

⚠️ **주의**: 구글 Apps Script URL을 아직 설정하지 않았다면:
- `index.html` 파일 수정 필요
- GitHub에서 직접 수정 가능 (연필 아이콘 클릭)

---

## 🌐 7단계: 커스텀 도메인 연결 (선택사항)

### 본인 도메인이 있다면:

1. GitHub Pages 설정에서 **Custom domain** 입력
2. DNS 설정:
   ```
   Type: CNAME
   Name: www (또는 원하는 서브도메인)
   Value: 사용자명.github.io
   ```
3. 24시간 이내 적용

---

## 🔄 8단계: 파일 수정하기

### 웹에서 수정:
1. 레포지토리에서 수정할 파일 클릭
2. 연필 아이콘 (Edit) 클릭
3. 수정 후 **Commit changes**
4. 1~2분 후 자동 배포

### 로컬에서 수정:
1. 파일 수정
2. GitHub에 다시 업로드
3. 또는 Git으로 push

---

## 📊 배포 완료 체크리스트

- [ ] GitHub 계정 생성
- [ ] 레포지토리 생성 (Public으로)
- [ ] 모든 파일 업로드 완료
- [ ] GitHub Pages 활성화
- [ ] 사이트 접속 확인
- [ ] 모바일 반응형 확인
- [ ] 구글 Apps Script URL 설정
- [ ] 신청 폼 테스트 완료

---

## 🎉 완료!

이제 다음 주소로 전 세계 누구나 접속 가능합니다:
```
https://사용자명.github.io/deepsignal-landing/
```

이 주소를 SNS, 카톡, 이메일 등으로 공유하세요! 🚀

---

## 🆘 문제 해결

### 문제: 사이트가 404 에러
**해결책:**
- Settings > Pages에서 Branch가 올바르게 설정되었는지 확인
- 1~2분 기다린 후 다시 시도
- 레포지토리가 Public인지 확인

### 문제: 이미지가 안 보임
**해결책:**
- 파일명이 정확한지 확인 (대소문자 구분)
- 모든 이미지 파일이 업로드되었는지 확인
- 브라우저 캐시 삭제 후 재시도

### 문제: 비디오가 재생되지 않음
**해결책:**
- hero-video.mp4 파일이 업로드되었는지 확인
- 파일 크기가 100MB 이하인지 확인 (GitHub 제한)
- 비디오 코덱 확인 (H.264 권장)

### 문제: 신청 폼이 작동하지 않음
**해결책:**
- 구글 Apps Script URL이 올바르게 설정되었는지 확인
- 브라우저 콘솔(F12)에서 에러 확인

---

## 📞 추가 도움이 필요하다면

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [GitHub 고객센터](https://support.github.com/)
