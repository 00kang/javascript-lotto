<h1 align="middle">🎱</h1>
<h2 align="middle">level1 - 행운의 로또</h2>
<p align="middle">자바스크립트로 구현 하는 로또 어플리케이션</p>

## STEP1

### 실행 및 테스트

```bash
 npm run start-step1 //실행
 npm run test //테스트
```

### 실행 화면

<img src="./lotto-step1.png" alt="실행화면" width="450"/>

### 테스트 실행 화면

<img src="./lotto-step1-test.png" alt="테스트 실행화면" width="300">

### 파일 구조

```
📦src
 ┣ 📂constant : 상수 관리
 ┃ ┣ 📜Messages.js : 입력, 입력힌트, 출력, 에러 메세지 관리
 ┃ ┗ 📜Options.js : 로또 가격, 로또 범위 최소, 최대 숫자, 상금, 게임 결과 등 관리
 ┣ 📂controller
 ┃ ┗ 📜LottoController.js : 로또 게임 진행
 ┣ 📂domain
 ┃ ┣ 📜Lotto.js
 ┃ ┗ 📜LottoMachine.js
 ┣ 📂util
 ┃ ┣ 📂random
 ┃ ┃ ┗ 📜Random.js
 ┃ ┣ 📂readLine
 ┃ ┃ ┗ 📜readLineAsync.js
 ┃ ┗ 📂validation
 ┃ ┃ ┣ 📜LottoNumbersValidator.js
 ┃ ┃ ┣ 📜PurchaseAmountValidator.js
 ┃ ┃ ┗ 📜Validation.js
 ┣ 📂view
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┣ 📜App.js
 ┣ 📜step1-index.js
 ┗ 📜step2-index.js

📦__tests__
 ┣ 📜.gitkeep
 ┣ 📜Lotto.test.js
 ┣ 📜LottoMachine.test.js
 ┗ 📜Random.test.js

```

## STEP2

### 실행 및 테스트

```bash
 npm run start-step2 //실행
```

### 기능 목록 작성

- UI 기준
  - [x] header, body, footer 구조 만들기
  - [ ] 구입 금액 입력
  - [ ] 로또 발행
  - [ ] 당첨번호, 보너스 번호 입력
  - [ ] 당첨통계 팝업
- [ ] 데이터 연결
