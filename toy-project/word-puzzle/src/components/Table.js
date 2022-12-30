import React, { useState, useCallback } from "react";
import Td from "./Td";

import classes from "./Table.module.css";

const Table = () => {
  const [word, setWord] = useState([]);
  console.log(word);

  const clickHandler = useCallback((word) => {
    console.log("useCallback");
    setWord(word);
  }, []);

  const resetHandler = () => {
    setWord("");
  };

  return (
    <div className={classes.center}>
      <Td onClick={clickHandler} word={word} onReset={resetHandler} />
    </div>
  );
};

export default React.memo(Table);
