import React, { useState, useEffect, useCallback } from "react";
import classes from "./Td.module.css";
import Card from "./UI/Card";

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
      clickedData.length < 2 &&
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
      props.onSubmit();
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
            <p className={classes.font}>{item.word}</p>
          </button>
        ))}
      </div>

      <div className={classes.box}>
        <h1>{props.word[0]}</h1>
        <h1>{props.word[1]}</h1>
      </div>
      <div>
        <button onClick={submitHanlder}>확인</button>
      </div>
    </>
  );
};

export default Td;
