import React, { useContext, useState } from "react";
import { StartContext } from "./context/start-context";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import classes from "./Start.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  const startContext = useContext(StartContext);
  const [selected, setSelected] = useState(false);
  return (
    <Card
      className={`${classes.modal} ${
        props.show === "entered"
          ? classes.Modalopen
          : props.show === "exited"
          ? classes.Modalclose
          : null
      }`}
    >
      <header className={classes.header}>
        <h2>동물 이름 퍼즐{props.show}</h2>
      </header>
      <div className={classes.content}>
        <p>동물 글자 수를 골라주세요.</p>
      </div>
      <footer className={classes.actions}>
        <Link to="/puzzle">
          <button
            onClick={() => {
              props.onClickTwo();
            }}
          >
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
    console.log(startContext.isSelected);
  };
  const twoWordHandler = () => {
    startContext.twoWord();
  };
  const threeWordHandler = () => {
    startContext.threeWord();
  };

  return (
    <React.Fragment>
      <Backdrop />
      <Transition in={true} timeout={300} appear>
        {(state) => (
          <ModalOverlay
            show={state}
            onClickTwo={() => {
              startHandler();
              twoWordHandler();
            }}
            onClickThree={() => {
              startHandler();
              threeWordHandler();
            }}
          />
        )}
      </Transition>
    </React.Fragment>
  );
};

export default Start;
