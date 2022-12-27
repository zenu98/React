import React from "react";
import classes from "./ResultForm.module.css";
const ReSultForm = (props) => {
  console.log("B");
  const submitHanlder = (e) => {
    e.preventDefault();
    if (props.word === "사과") {
      props.onReset();
    } else {
      alert("땡");
    }
  };

  return (
    <form onSubmit={submitHanlder} className={classes.input}>
      <div>
        <input type="text" id="word" value={props.word} readOnly />
      </div>

      <div>
        <button>확인</button>
      </div>
    </form>
  );
};

export default ReSultForm;
