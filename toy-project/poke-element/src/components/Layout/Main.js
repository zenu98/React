import classes from "./Main.module.css";
import { useState } from "react";
const Main = (props) => {
  const [isHoveringOne, setIsHoveringOne] = useState(false);
  const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  const handleMouseOverOne = () => {
    setIsHoveringOne(true);
  };
  const handleMouseOverTwo = () => {
    setIsHoveringTwo(true);
  };

  const handleMouseOutOne = () => {
    setIsHoveringOne(false);
  };
  const handleMouseOutTwo = () => {
    setIsHoveringTwo(false);
  };
  const goGithub = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className={classes.background}>
      <div className={classes.titlecontainer}>
        <div className={classes.titlebox}>
          <p className={classes.title} data-text="포켓몬">
            포켓몬
          </p>
          <p className={classes.title}>상성 계산기</p>
        </div>
        <div className={classes.menubox}>
          {isHoveringOne && (
            <img
              className={classes.arrowimg}
              src="img/pixelarrow.png"
              alt="arrow"
            />
          )}
          <span
            className={classes.menu}
            onClick={props.onClick}
            onMouseOver={handleMouseOverOne}
            onMouseOut={handleMouseOutOne}
          >
            {`시작하기`}
          </span>
        </div>
        <div className={classes.menubox}>
          {isHoveringTwo && (
            <img
              className={classes.arrowimg}
              src="img/pixelarrow.png"
              alt="arrow"
            />
          )}

          <span
            className={classes.menu}
            onClick={() => goGithub("https://github.com/zenu98")}
            onMouseOver={handleMouseOverTwo}
            onMouseOut={handleMouseOutTwo}
          >
            Github
          </span>
        </div>
      </div>

      <img id={classes.poketmon} alt="이상해씨" src="img/이상해씨.png" />
    </div>
  );
};

export default Main;
