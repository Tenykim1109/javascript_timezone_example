# 프론트엔드 타임존 관리 예제

## 개발 환경

- 프론트엔드 라이브러리: React
- API 라이브러리:axios, json-server
- 패키지 매니저: Yarn

## 로컬 환경 실행 방법

**1. 패키지 다운로드**

```shell
yarn
```

**2. json-server 실행**

```
npx json-server ./db.json --port 4000
```

**3. 프로젝트 실행**

```
yarn start
```

## 구현 내용

1. 사용자로부터 입력 받은 시간을 UTC 시간으로 변환 후 서버로 전송(src/utils/time.js)
2. 서버에 저장된 UTC 시간을 받아와 Local 시간으로 변환(src/utils/time.js)
