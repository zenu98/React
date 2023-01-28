import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>포켓몬 상성</h1>
      </header>
    </React.Fragment>
  );
};

export default Header;
