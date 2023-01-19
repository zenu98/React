import { Link } from "react-router-dom";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(/img/background.jpg)` }}
    >
      <div className={classes.textcontainer}>
        <span>간단한</span>
        <span className={classes.text}>동물 단어 퍼즐</span>
        <Link to="/select">
          <button className={classes.btn}>
            <span>시작</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
