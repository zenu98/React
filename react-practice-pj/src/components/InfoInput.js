import React, { useState } from "react";
import Card from "./Card";
import styles from "./InfoInput.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const InfoInput = (props) => {
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0) {
      setError({
        title: "이름이 없습니다.",
        message: "이름을 작성 해 주세요",
      });
      return;
    }

    if (+userage < 1 || userage.trim().length === 0) {
      // String to Number   ( +(string) => number )
      setError({
        title: "나이가 잘못되었습니다.",
        message: "올바른 나이를 작성 해 주세요",
      });
      return;
    }
    props.onAddList(username, userage);
    setUserage("");
    setUsername("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserage(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userage}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default InfoInput;
