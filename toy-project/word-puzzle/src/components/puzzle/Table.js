import React, { useState, useCallback } from "react";
import Td from "./Td";

const Table = () => {
  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);
  const wordLength = localStorage.getItem("word");

  console.log(word);
  console.log(count);

  const clickHandler = useCallback((word) => {
    console.log("useCallback");
    setWord(word);
  }, []);

  const submitHandler = () => {
    setWord("");
    setCount((prev) => prev + 1);
  };

  const confirmHandler = () => {
    console.log("modal");
    setCount(0);
  };

  return (
    <React.Fragment>
      <Td
        onClick={clickHandler}
        word={word}
        wordLength={wordLength}
        onSubmit={submitHandler}
      />
    </React.Fragment>
  );
};

export default React.memo(Table);
