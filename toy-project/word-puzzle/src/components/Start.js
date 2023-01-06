import React, { useContext } from "react";
import { StartContext } from "./context/start-context";
import Card from "./UI/Card";
import classes from "./Start.module.css";

const Auth = () => {
  const startContext = useContext(StartContext);
  const loginHandler = () => {
    console.log("click");
    startContext.login();
  };

  return (
    <div className={classes.auth}>
      <Card>
        <h2>로그인 해주세요!</h2>
        <p>로그인을 하면 내용이 보입니다.</p>
        <button onClick={loginHandler}>로그인</button>
        <button onClick={loginHandler}>로그인</button>
      </Card>
    </div>
  );
};

export default Auth;
