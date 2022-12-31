import React, { useState, useEffect, useCallback } from "react";
import classes from "./Td.module.css";

const Td = (props) => {
  const { onClick } = props;
  const [dataList, setDataList] = useState([]);
  const [chrList, setChrList] = useState([]);
  const [clickedData, setClickedData] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState([]);

  console.log(disabledBtn);
  console.log(dataList);
  console.log(clickedData);

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
        setChrList(dataArr);
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
    clickedData.map(({ word }) => (chr += word));
    onClick(chr);
    console.log(clickedData);
  }, [onClick, clickedData]);

  const clickHandler = (e) => {
    console.log("click");

    if (clickedData.some((item) => item.id === e.target.name)) {
      setClickedData((prev) => prev.filter((a) => a.id !== e.target.name));
    } else {
      setClickedData((prev) => [
        ...prev,
        { id: e.target.name, word: e.target.value },
      ]);
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (dataList.some((item) => item.name === props.word)) {
      clickedData.map(({ id }) => {
        return setDisabledBtn((prev) => [...prev, id]);
      });
      setClickedData([]);
      props.onReset();
    } else {
      alert("땡");
    }
  };

  return (
    <>
      <div className={classes.dataTable}>
        {chrList.map((item) => (
          <button
            disabled={disabledBtn.includes(item.id)}
            type="button"
            name={item.id}
            key={item.id}
            value={item.word}
            className={`${
              clickedData.some((a) => a.id === item.id)
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
