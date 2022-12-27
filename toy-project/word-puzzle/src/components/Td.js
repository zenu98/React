import React, { useState, useEffect } from "react";
import classes from "./Td.module.css";

const Td = (props) => {
  const { onClick } = props;
  const [data, setData] = useState([]);
  const [wordArr, setWordArr] = useState([]);

  const [buttonCss, setButtonCss] = useState([]);
  console.log(buttonCss);

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

  useEffect(() => {
    console.log("useEffect");
    let chr = "";
    wordArr.map(({ word }) => (chr += word));
    onClick(chr);
    console.log(wordArr);
  }, [onClick, wordArr]);

  const clickHandler = (e) => {
    console.log("click");

    const idList = [];
    for (const key in wordArr) {
      idList.push(wordArr[key].id);
    }
    console.log(idList);

    if (idList.includes(e.target.name)) {
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

  return (
    <>
      <div className={classes.dataTable}>
        {data.map((item) => (
          <button
            type="button"
            name={item.id}
            key={item.id}
            value={item.word}
            className={`${
              buttonCss.includes(item.id) ? classes.datas : classes.data
            }`}
            onClick={clickHandler}
          >
            {item.word}
          </button>
        ))}
      </div>
      <form>
        <input />
      </form>
    </>
  );
};

export default Td;
