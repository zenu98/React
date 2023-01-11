import classes from "./Result.module.css";

const Result = (props) => {
  return (
    <div className={classes["result-box"]}>
      <div>
        <span>{props.word[0]}</span>
      </div>
      <div>
        <span>{props.word[1]}</span>
      </div>
      {props.wordLength === "3" && (
        <div>
          <span>{props.word[2]}</span>
        </div>
      )}
    </div>
  );
};

export default Result;
