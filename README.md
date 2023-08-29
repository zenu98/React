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


## 화면구성

- ### 첫 화면
![word1](https://github.com/zenu98/ReactStudy/assets/90780629/9b26683a-3d58-4afb-8976-fc69970c5f8a)

동적으로 문구와 시작 버튼이 나오도록 하였다.

- ### 단어 개수 선택

![word2](https://github.com/zenu98/ReactStudy/assets/90780629/7fbd385c-595a-4b23-b523-af7d5dacabc6)

동물 단어의 개수가 2개짜리와 3개짜리로 나뉘어져 있어서 그것을 선택할 수  있다.

- ### 단어 맞추기
![word3](https://github.com/zenu98/ReactStudy/assets/90780629/9f7411bd-f05c-4be4-a9d7-4daf1a728be3)

선택한 단어 개수에 맞는 동물 이름들이 한 글자씩 무작위로 배열되어 있으며 이를 맞추는 게임이다.
퍼즐 상단에는 단어들을 새로고침하는 버튼과 홈으로 리다이렉트 하는 버튼을 구현하였다.

- #### Firebase 데이터 다루기

![image](https://github.com/zenu98/ReactStudy/assets/90780629/2c722322-cd68-408f-a010-eabeadf24e89)

```javascript
 useEffect(() => {
    setIsLoading(true);
    const dataArr = [];
    const query = `?orderBy="length"&equalTo=${props.wordLength}`;

    fetch(
      "https://word-puzzle-efb93-default-rtdb.firebaseio.com/animals.json" +
        query
    )
      .then((response) => response.json())
      .then((responseData) => {
        for (let i = responseData.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [responseData[i], responseData[j]] = [
            responseData[j],
            responseData[i],
          ];
        }
        const loadedAnimals = [];
        for (const key in responseData) {
          if (loadedAnimals.length < 8) {
            loadedAnimals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              length: responseData[key].length,
            });
          } else break;
        }
        dataListHandler(loadedAnimals);

        for (let k = 0; k < loadedAnimals.length; k++) {
          for (let i = 0; i <= loadedAnimals[k].name.length - 1; i++) {
            const chr = loadedAnimals[k].name.substring(i, i + 1);
            dataArr.push({
              id: Math.random().toString(),
              word: chr,
            });
          }
        }
        dataArr.sort(() => Math.random() - 0.5);
        setChrList(dataArr);
        setIsLoading(false);
      });
  }, [dataListHandler, props.wordLength]);
```
firebase 데이터에서 선택한 동물이름의 단어개수에 따라(2글자 or 3글자) 이름들을 받아와 각 단어를 한글자씩 나누어 무작위로 배열시키는 부분이다.

- #### Portal을 사용한 백드롭 모달 구현
```javascript
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
```


## 포켓몬스터 속성 계산기
### [포켓몬 상성 계산기](https://github.com/zenu98/ReactStudy/tree/main/toy-project/poke-element)
두번째 개인 제작 토이 프로젝트
개발기간: 2023.02 ~ 2023.03

## 기술 스택

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">
### ✔️Back-end
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">


## 화면구성

- ### 첫 화면
![pokemon1](https://github.com/zenu98/ReactStudy/assets/90780629/f31eb3ed-5bca-4af2-b12c-b3d9dc4f5500)

시작하기 부분을 누르면 다음 페이지로 넘어간다. 이때 페이지가 넘어가는 방식은 full-page 방식을 사용했으며 이 부분은 react 라이브러리를 사용하여 구현하였다.

- ### 속성 고르기

![pokemon2](https://github.com/zenu98/ReactStudy/assets/90780629/974651ef-8672-4bfd-949c-91846ca4a56d)
![pokemon2-1](https://github.com/zenu98/ReactStudy/assets/90780629/55d4f5df-b981-4c94-ba0f-642dd9441259)
![pokemon2-2](https://github.com/zenu98/ReactStudy/assets/90780629/1279402b-ca62-4c34-9f3c-82794e48db4c)

화면 가운데에 있는 몬스터볼을 클릭하면 선택할 수 있는 속성들이 나오게 된다. 


- ### 계산 결과
![pokemon3](https://github.com/zenu98/ReactStudy/assets/90780629/2b850f6e-4fa0-41f1-b778-30820f7ac24b)

선택한 속성들에 대한 공격/방어 속성 상성을 계산하여 출력한다.

- ### 시연 영상
![Honeycam 2023-08-01 18-24-27](https://github.com/zenu98/ReactStudy/assets/90780629/b7dae3eb-ee33-4c3a-afbb-020ef0422ecf)




