import React, { useState, useEffect, useCallback } from "react";
import classes from "./Td.module.css";
import { CgCheckR } from "react-icons/cg";

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
    console.log(e.target.name);

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
      <div className={classes["data-table"]}>
        {chrList.map((item) => (
          <button
            disabled={disabledBtn.includes(item.id)}
            type="button"
            name={item.id}
            key={item.id}
            value={item.word}
            className={`${
              clickedData.some((a) => a.id === item.id)
                ? classes["clicked-btn"]
                : classes.btn
            }`}
            onClick={clickHandler}
          >
            <span>{item.word}</span>
          </button>
        ))}
      </div>

      <div className={classes["result-box"]}>
        <div>
          <span>{props.word[0]}</span>
        </div>
        <div>
          <span>{props.word[1]}</span>
        </div>
      </div>

      <CgCheckR onClick={submitHanlder} className={classes["check-btn"]} />
    </>
  );
};

export default Td;
