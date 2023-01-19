import React, { useContext, useState } from "react";
import { StartContext } from "./context/start-context";
import { Transition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import Card from "./UI/Card";
import classes from "./Start.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  const navigate = useNavigate();

  const goPuzzle = () => {
    setTimeout(() => {
      navigate("/puzzle");
    }, 1000);
  };

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
        <h2>동물 이름 퍼즐</h2>
      </header>
      <div className={classes.content}>
        <p>동물 글자 수를 골라주세요.</p>
      </div>
      <footer className={classes.actions}>
        <button
          onClick={() => {
            props.onClickTwo();
            goPuzzle();
          }}
        >
          <span>2</span>
        </button>

        <button
          onClick={() => {
            props.onClickThree();
            goPuzzle();
          }}
        >
          <span>3</span>
        </button>
      </footer>
    </Card>
  );
};

const Start = () => {
  const [selected, setSelected] = useState(true);
  const startContext = useContext(StartContext);

  const twoWordHandler = () => {
    startContext.twoWord();
  };
  const threeWordHandler = () => {
    startContext.threeWord();
  };

  return (
    <React.Fragment>
      <Backdrop />
      <Transition in={selected} timeout={0}>
        {(state) => (
          <ModalOverlay
            show={state}
            onClickTwo={() => {
              twoWordHandler();
              setSelected(false);
            }}
            onClickThree={() => {
              threeWordHandler();
              setSelected(false);
            }}
          />
        )}
      </Transition>
    </React.Fragment>
  );
};

export default Start;
