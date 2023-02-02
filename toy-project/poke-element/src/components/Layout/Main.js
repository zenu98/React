import classes from "./Main.module.css";
const Main = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.titlebox}>
        <p className={classes.title} data-text="포켓몬">
          포켓몬
        </p>
        <p className={classes.title}>상성 계산기</p>
        <button type="button" onClick={props.onClick}>
          toggle last slide
        </button>
      </div>

      <img id={classes.poketmon} alt="이상해씨" src="img/이상해씨.png" />
    </div>
  );
};

export default Main;
