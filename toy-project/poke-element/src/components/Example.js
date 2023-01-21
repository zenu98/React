import React, { useState } from "react";
import classes from "./Example.module.css";

const Example = (props) => {
  const [toggle, setToggle] = useState(false);
  const clickhandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes["menu-btn"]} onClick={clickhandler}>
        <div className={classes.btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={classes["icons-wrapper"]}>
        <div className={classes.icons}>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-facebook"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-twitter"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-pinterest-p"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-envelope"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-phone"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-vk"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>

          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-google"]}></i>
          </div>

          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-youtube"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-youtube"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-youtube"]}></i>
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <i className={classes["fa fa-youtube"]}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
