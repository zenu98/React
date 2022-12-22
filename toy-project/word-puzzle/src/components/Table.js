import React, { useState, useCallback } from "react";
import Td from "./Td";
import ReSultForm from "./ResultForm";
import classes from "./Table.module.css";

const Table = () => {
  const [word, setWord] = useState("");
  const [state, setState] = useState([]);

  const loadHandler = useCallback((data) => {
    setState(data);
  }, []);

  const clickHandler = (word) => {
    setWord((prev) => prev + word);
  };

  const resetHandler = () => {
    setWord("");
  };

  console.log(state);
  return (
    <div className={classes.center}>
      <Td dataArr2={state} onClick={clickHandler} />
      <ReSultForm word={word} onLoad={loadHandler} onReset={resetHandler} />
    </div>
  );
};

export default React.memo(Table);
