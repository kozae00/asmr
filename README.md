# site-asmr

MBTI 성격 유형을 참고해 2030 취향의 ASMR 사운드를 추천하는 간단한 Spring Boot 웹 사이트입니다.

## 화면 흐름

1. `/` - 시작 화면
2. `/questions.html` - 10문항 성향 테스트
3. `/result.html` - 추천 ASMR 결과, 대표 이미지, 재생 버튼, 공유 버튼

## 실행

Gradle이 설치된 환경에서 실행합니다.

```bash
gradle bootRun
```

실행 후 `http://localhost:8080`으로 접속합니다.

## 음원 연결

아직 실제 소리 데이터는 포함하지 않았습니다. 추후 `src/main/resources/static/audio/`에 파일을 추가한 뒤 `src/main/resources/static/js/app.js`의 `profiles` 항목에서 `audio` 값을 `/audio/file-name.mp3`처럼 채우면 결과 화면 재생 버튼으로 연결됩니다.
