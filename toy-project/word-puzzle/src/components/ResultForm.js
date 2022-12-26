import React from "react";
const ReSultForm = (props) => {
  console.log("B");
  const submitHanlder = (e) => {
    e.preventDefault();
    props.onReset();
  };

  return (
    <form onSubmit={submitHanlder}>
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
