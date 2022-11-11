import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onAbc}
    >
      {props.children}
    </button>
  );
};
export default Button;
