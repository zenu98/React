import React, { useState } from "react";
import classes from "./Td.module.css";

const Td = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [divState, setDivState] = useState();
  return (
    <div className={classes.dataTable}>
      {props.dataArr2.map(({ id, word }) => (
        <button
          className={classes.data}
          onClick={() => {
            props.onClick(word);
          }}
          key={id}
        >
          {word}
        </button>
      ))}
    </div>
  );
};

export default Td;
