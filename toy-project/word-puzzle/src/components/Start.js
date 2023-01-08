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
  const twoWordHandler = () => {
    startContext.twoWord();
  };
  const threeWordHandler = () => {
    startContext.threeWord();
  };

  return (
    <div className={classes.auth}>
      <Card>
        <h2>동물 이름 퍼즐!</h2>
        <p>동물 글자 수를 골라주세요.</p>
        <button
          onClick={() => {
            loginHandler();
            twoWordHandler();
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            loginHandler();
            threeWordHandler();
          }}
        >
          3
        </button>
      </Card>
    </div>
  );
};

export default Auth;
