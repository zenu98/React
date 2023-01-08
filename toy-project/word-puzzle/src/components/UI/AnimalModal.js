import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.animal}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.description}</p>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onConfirm}>확인</button>
      </footer>
    </Card>
  );
};

const AnimalModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          animal={props.word}
          description={props.description}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default AnimalModal;
