import React, { useState, useEffect } from "react";
import classes from "./Td.module.css";

const Td = (props) => {
  const { onClick } = props;
  const [data, setData] = useState([]);
  const [dataClick, setDataClick] = useState([]);
  console.log(dataClick);

  useEffect(() => {
    console.log("useeffect");
    const dataArr = [];
    const DUMMY = [
      { id: 1, word: "바나나" },
      { id: 2, word: "사과" },
      { id: 3, word: "전화번호" },
      { id: 4, word: "모자" },
      { id: 5, word: "마우스" },
      { id: 6, word: "휴지" },
      { id: 7, word: "감자" },
    ];
    for (let k = 0; k < DUMMY.length; k++) {
      for (let i = 0; i <= DUMMY[k].word.length - 1; i++) {
        const chr = DUMMY[k].word.substring(i, i + 1);
        if (dataArr.length < 16) {
          dataArr.push({
            id: Math.random().toString(),
            word: chr,
          });
        }
      }
    }
    dataArr.sort(() => Math.random() - 0.5);
    setData(dataArr);
  }, []);

  const clickHandler = (e) => {
    setDataClick(e.target.value);
    console.log(dataClick);
  };

  useEffect(() => {
    onClick(dataClick);
  }, [onClick, dataClick]);

  return (
    <div className={classes.dataTable}>
      {data.map(({ id, word }) => (
        <button
          key={id}
          value={word}
          className={` ${classes.data}`}
          onClick={clickHandler}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default Td;
