import React, { useState, useEffect, useCallback } from "react";
import classes from "./Td.module.css";

const Td = (props) => {
  const { onClick } = props;
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState([]);
  const [wordArr, setWordArr] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState([]);
  const [buttonCss, setButtonCss] = useState([]);
  console.log(buttonCss);
  console.log(disabledBtn);
  console.log(dataList);
  console.log(wordArr);

  const dataListHandler = useCallback((data) => {
    setDataList(data);
  }, []);

  useEffect(() => {
    const dataArr = [];
    fetch("https://word-puzzle-efb93-default-rtdb.firebaseio.com/animals.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedAnimals = [];
        for (const key in responseData) {
          loadedAnimals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
          });
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
        setData(dataArr);
      });
  }, [dataListHandler]);

  // useEffect(() => {
  //   console.log("useeffect");

  //   const DUMMY = [
  //     { id: 1, word: "바나나" },
  //     { id: 2, word: "사과" },
  //     { id: 3, word: "전화번호" },
  //     { id: 4, word: "모자" },
  //     { id: 5, word: "마우스" },
  //     { id: 6, word: "휴지" },
  //     { id: 7, word: "감자" },
  //   ];
  //   for (let k = 0; k < DUMMY.length; k++) {
  //     for (let i = 0; i <= DUMMY[k].word.length - 1; i++) {
  //       const chr = DUMMY[k].word.substring(i, i + 1);
  //       if (dataArr.length < 16) {
  //         dataArr.push({
  //           id: Math.random().toString(),
  //           word: chr,
  //         });
  //       }
  //     }
  //   }
  //   dataArr.sort(() => Math.random() - 0.5);
  //   setData(dataArr);
  // }, []);

  useEffect(() => {
    console.log("useEffect");
    let chr = "";
    wordArr.map(({ word }) => (chr += word));
    onClick(chr);
    console.log(wordArr);
  }, [onClick, wordArr]);

  const clickHandler = (e) => {
    console.log("click");

    if (wordArr.some((item) => item.id === e.target.name)) {
      setButtonCss((prev) => prev.filter((a) => a !== e.target.name));
      setWordArr((prev) => prev.filter((a) => a.id !== e.target.name));
    } else {
      setButtonCss((prev) => [...prev, e.target.name]);

      setWordArr((prev) => [
        ...prev,
        { id: e.target.name, word: e.target.value },
      ]);
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (dataList.some((item) => item.name === props.word)) {
      buttonCss.map((id) => {
        return (
          setWordArr((prev) => prev.filter((a) => a.id !== id)),
          setDisabledBtn((prev) => [...prev, id])
        );
      });

      props.onReset();
    } else {
      alert("땡");
    }
  };

  return (
    <>
      <div className={classes.dataTable}>
        {data.map((item) => (
          <button
            disabled={disabledBtn.includes(item.id)}
            type="button"
            name={item.id}
            key={item.id}
            value={item.word}
            className={`${
              wordArr.some((a) => a.id === item.id)
                ? classes.datas
                : classes.data
            }`}
            onClick={clickHandler}
          >
            {item.word}
          </button>
        ))}
      </div>
      <form onSubmit={submitHanlder} className={classes.input}>
        <div>
          <input type="text" id="word" value={props.word} readOnly />
          <button>확인</button>
        </div>
      </form>
    </>
  );
};

export default Td;
