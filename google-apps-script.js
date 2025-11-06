/**
 * 딥시그널 무료 체험 신청 - 구글 시트 연동 스크립트
 *
 * 설정 방법:
 * 1. 구글 시트 생성 (https://sheets.google.com)
 * 2. 시트 이름을 "신청서"로 변경 (또는 아래 SHEET_NAME 수정)
 * 3. 첫 번째 행에 헤더 추가: 신청일시 | 이름 | 연락처 | 접속경로
 * 4. 도구 > Apps Script 클릭
 * 5. 아래 코드 전체 복사 붙여넣기
 * 6. 배포 > 새 배포 > 유형: 웹 앱
 *    - 실행 계정: 나
 *    - 액세스 권한: 모든 사용자
 * 7. 배포 후 받은 URL을 index.html의 GOOGLE_SCRIPT_URL에 입력
 */

// 구글 시트 설정
const SHEET_NAME = '신청서'; // 시트 이름 (필요시 수정)

// POST 요청 처리 함수
function doPost(e) {
  try {
    // 스프레드시트 및 시트 가져오기
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // 시트가 없으면 생성
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // 헤더 추가
      sheet.appendRow(['신청일시', '이름', '연락처', '접속경로']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // 전송된 데이터 파싱
    const data = JSON.parse(e.postData.contents);

    // 시트에 데이터 추가
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      data.name || '',
      data.contact || '',
      data.referrer || '직접 접속'
    ]);

    // 성공 응답
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: '신청이 완료되었습니다.'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 오류 응답
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 처리 함수 (테스트용)
function doGet(e) {
  return ContentService.createTextOutput('딥시그널 신청서 API가 정상 작동 중입니다.');
}
