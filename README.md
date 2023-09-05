## 레퍼지토리 소개

React 첫 입문 부터 개인 프로젝트 제작까지 총 집합

## 단어 맞추기 퍼즐
### [동물단어퍼즐](https://github.com/zenu98/ReactStudy/tree/main/toy-project/word-puzzle)
- 첫번째 개인 제작 토이 프로젝트
- 모든 개발은 전부 직접 구현.
- 개발기간: 2023.01 ~ 2023.02

- 카카오톡 녹화기능을 사용했는데 녹화프로그램 문제인지 격자무늬가 보이는 문제 양해바람


## 기술 스택

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">
### ✔️Back-end
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">


## 개발 내용

- ### 첫 화면
![word1](https://github.com/zenu98/ReactStudy/assets/90780629/9b26683a-3d58-4afb-8976-fc69970c5f8a)


- ### 단어 개수 선택

![word2](https://github.com/zenu98/ReactStudy/assets/90780629/7fbd385c-595a-4b23-b523-af7d5dacabc6)

동물 단어의 개수가 2개짜리와 3개짜리로 나뉘어져 있어서 그것을 선택할 수 있다.

- ### 단어 맞추기
![word3](https://github.com/zenu98/ReactStudy/assets/90780629/9f7411bd-f05c-4be4-a9d7-4daf1a728be3)

선택한 단어 개수에 맞는 동물 이름들이 한 글자씩 무작위로 배열되어 있으며 이를 맞추는 게임이다.  
퍼즐 상단에는 단어들을 새로고침하는 버튼과 홈으로 리다이렉트 하는 버튼을 구현하였다.

- #### Firebase Realtime DB

![image](https://github.com/zenu98/ReactStudy/assets/90780629/2c722322-cd68-408f-a010-eabeadf24e89)

- #### Context API, useReducer
글자 수에 따라서 다른 데이터를 불러와야 하기에 context API를 통해 상태관리를 하였습니다.  
글자 버튼들의 토글 여부라던지 정답이 된 글자들은 비활성화 해야 했기에 이런 다양한 상태들은 useReducer 훅을 통해서 관리해보았습니다.
이러한 과정 속에서 react의 상태관리 개념을 이해하고 스킬에 익숙해지는 시간을 가졌습니다.


- #### Portal을 사용한 백드롭 모달 구현
 단어를 맞췄을 때나 처음 글자 수를 고를 때 나오는 Modal 창을 Potal을 이용해 구현했습니다.  
 포탈을 통해 컴포넌트의 유연한 제어와 포탈을 사용함에 있어서 장점들을 학습할 수 있었습니다.

- #### React-route
  첫 화면에서 글자를 선택하고 퍼즐화면으로 넘어가거나 새로고침을 할 때 라우팅을 통해 SPA 개념에 대해 공부했습니다.

- ### 배운 점
  React를 사용하여 화면을 구성하기 위해 컴포넌트를 다루는 일부터 다양한 Hook들을 사용하고 Redux 상태관리 라이브러리를 통해 데이터들을 다루었습니다.  
  이때까지 이론적으로 공부한 내용을 토대로 과연 제가 머릿속에 구상한 아이디어들을 뷰포트에서 실현할 수 있을지 증명하고 검토하는 것에 중점을 두었습니다.  


## 포켓몬스터 속성 계산기
### [포켓몬 상성 계산기](https://github.com/zenu98/ReactStudy/tree/main/toy-project/poke-element)
- 두번째 개인 제작 토이 프로젝트
- 개발기간: 2023.02 ~ 2023.03
![image](https://github.com/zenu98/ReactStudy/assets/90780629/ca187c3b-9f5c-4e11-bcf1-30fad3a5b59e)
- 포켓몬스터라는 게임은 다양한 속성들을 가진 포켓몬이 있고 각 속성마다 다른 속성과 상성관계가 잡혀있다.
- 위 표와 같은 상성관계를 계산할 수 있는 기능과 한눈에 보여지도록 하는 웹페이지를 제작하였다.

## 기술 스택

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">
### ✔️Back-end
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">


## 개발 내용

- ### Full-page
![pokemon1](https://github.com/zenu98/ReactStudy/assets/90780629/f31eb3ed-5bca-4af2-b12c-b3d9dc4f5500)
![Honeycam 2023-08-01 18-24-27](https://github.com/zenu98/ReactStudy/assets/90780629/b7dae3eb-ee33-4c3a-afbb-020ef0422ecf)
시작하기 부분을 누르면 다음 페이지로 넘어간다. 이때 페이지가 넘어가는 방식은 full-page 방식을 사용했으며 이 부분은 react 라이브러리를 사용하여 구현하였다.

- ### CSS 애니메이션

![pokemon2](https://github.com/zenu98/ReactStudy/assets/90780629/974651ef-8672-4bfd-949c-91846ca4a56d)
![pokemon2-1](https://github.com/zenu98/ReactStudy/assets/90780629/55d4f5df-b981-4c94-ba0f-642dd9441259)
![pokemon2-2](https://github.com/zenu98/ReactStudy/assets/90780629/1279402b-ca62-4c34-9f3c-82794e48db4c)

화면 가운데에 있는 몬스터볼을 클릭하면 선택할 수 있는 속성들이 나오게 된다. 


- ### 계산 결과
![pokemon3](https://github.com/zenu98/ReactStudy/assets/90780629/2b850f6e-4fa0-41f1-b778-30820f7ac24b)

선택한 속성들에 대한 공격/방어 속성 상성을 계산하여 출력한다.

- ### Redux 비동기 통신
  firebase에 있는 데이터를 받아오기 위한 비동기 통신을 redux를 통해 구현하였다.



