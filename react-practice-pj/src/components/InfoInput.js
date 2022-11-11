import React, { useState, useRef } from "react";
import Card from "./Card";
import styles from "./InfoInput.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const InfoInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0) {
      setError({
        title: "이름이 없습니다.",
        message: "이름을 작성 해 주세요",
      });
      return;
    }

    if (+enteredAge < 1 || enteredAge.trim().length === 0) {
      // String to Number   ( +(string) => number )
      setError({
        title: "나이가 잘못되었습니다.",
        message: "올바른 나이를 작성 해 주세요",
      });
      return;
    }
    props.onAddList(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onBack={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default InfoInput;
