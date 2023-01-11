import React, { useContext } from "react";
import { StartContext } from "./context/start-context";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import classes from "./Start.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>동물 이름 퍼즐</h2>
      </header>
      <div className={classes.content}>
        <p>동물 글자 수를 골라주세요.</p>
      </div>
      <footer className={classes.actions}>
        <Link to="/puzzle">
          <button onClick={props.onClickTwo}>
            <span>2</span>
          </button>
        </Link>
        <Link to="/puzzle">
          <button onClick={props.onClickThree}>
            <span>3</span>
          </button>
        </Link>
      </footer>
    </Card>
  );
};

const Start = () => {
  const startContext = useContext(StartContext);
  const startHandler = () => {
    console.log("click");
    startContext.select();
  };
  const twoWordHandler = () => {
    startContext.twoWord();
  };
  const threeWordHandler = () => {
    startContext.threeWord();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClickTwo={() => {
            startHandler();
            twoWordHandler();
          }}
          onClickThree={() => {
            startHandler();
            threeWordHandler();
          }}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Start;
