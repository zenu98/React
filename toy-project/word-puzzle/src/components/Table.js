import React, { useState, useCallback } from "react";
import Td from "./Td";
import ReSultForm from "./ResultForm";
import classes from "./Table.module.css";

const Table = () => {
  const [word, setWord] = useState("");

  const clickHandler = useCallback((word) => {
    setWord((prev) => prev + word);
    console.log(word);
  }, []);

  const resetHandler = () => {
    setWord("");
  };

  return (
    <div className={classes.center}>
      <Td onClick={clickHandler} />
      <ReSultForm word={word} onReset={resetHandler} />
    </div>
  );
};

export default React.memo(Table);
