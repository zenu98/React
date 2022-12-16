import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd({ title: enteredTitle, amount: enteredAmount });
    setEnteredAmount("");
    setEnteredTitle("");
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">이름</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(event) => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">수량</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(event) => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit" onSubmit={submitHandler}>
              추가
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
