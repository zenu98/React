import classes from "./ResultPage.module.css";
import { useSelector } from "react-redux";
const ResultPage = () => {
  const result = useSelector((state) => state.result.typesArr);
  const twoArrOffense = [];
  const oneArrOffense = [];
  const pointFiveArrOffense = [];
  const zeroOffense = [];

  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === 2) {
      twoArrOffense.push(result[i][0]);
    } else if (result[i][1] === 1) {
      oneArrOffense.push(result[i][0]);
    } else if (result[i][1] === 0.5) {
      pointFiveArrOffense.push(result[i][0]);
    } else if (result[i][1] === 0) {
      zeroOffense.push(result[i][0]);
    }
  }

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.textbox}>
            <div className={classes.title}>공격</div>
            {twoArrOffense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>2x</div>
                <div>
                  {twoArrOffense.map((item) => (
                    <img
                      className={classes.type}
                      src={`img/${item}.png`}
                      alt={`${item}`}
                      key={`${item}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {oneArrOffense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>1x</div>
                <div>
                  {oneArrOffense.map((item) => (
                    <img
                      className={classes.type}
                      src={`img/${item}.png`}
                      alt={`${item}`}
                      key={`${item}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {pointFiveArrOffense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>0.5x</div>
                <div>
                  {pointFiveArrOffense.map((item) => (
                    <img
                      className={classes.type}
                      src={`img/${item}.png`}
                      alt={`${item}`}
                      key={`${item}`}
                    />
                  ))}
                </div>
              </div>
            )}{" "}
            {zeroOffense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>0x</div>
                <div>
                  {zeroOffense.map((item) => (
                    <img
                      className={classes.type}
                      src={`img/${item}.png`}
                      alt={`${item}`}
                      key={`${item}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={classes.textbox}>
            <p className={classes.title}>방어</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
