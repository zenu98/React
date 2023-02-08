import classes from "./ResultPage.module.css";
import { useSelector } from "react-redux";
const ResultPage = () => {
  const result = useSelector((state) => state.result.typesArr);
  const defenseResult = useSelector((state) => state.result.defenseTypesArr);
  const twoArrOffense = [];
  const twoArrDefense = [];
  const oneArrOffense = [];
  const oneArrDefense = [];
  const pointFiveArrOffense = [];
  const pointFiveArrDefense = [];
  const zeroOffense = [];
  const zeroDefense = [];

  console.log(result);
  console.log(defenseResult);

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
  for (let i = 0; i < defenseResult.length; i++) {
    if (defenseResult[i][1] === 2) {
      twoArrDefense.push(defenseResult[i][0]);
    } else if (defenseResult[i][1] === 1) {
      oneArrDefense.push(defenseResult[i][0]);
    } else if (defenseResult[i][1] === 0.5) {
      pointFiveArrDefense.push(defenseResult[i][0]);
    } else if (defenseResult[i][1] === 0) {
      zeroDefense.push(defenseResult[i][0]);
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
            )}
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
            <div className={classes.title}>방어</div>
            {twoArrDefense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>2x</div>
                <div>
                  {twoArrDefense.map((item) => (
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
            {oneArrDefense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>1x</div>
                <div>
                  {oneArrDefense.map((item) => (
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
            {pointFiveArrDefense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>0.5x</div>
                <div>
                  {pointFiveArrDefense.map((item) => (
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
            {zeroDefense.length > 0 && (
              <div className={classes.content}>
                <div className={classes.number}>0x</div>
                <div>
                  {zeroDefense.map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
