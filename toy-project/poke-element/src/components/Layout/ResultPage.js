import classes from "./ResultPage.module.css";
import { useSelector } from "react-redux";
const ResultPage = () => {
  const result = useSelector((state) => state.result.typesArr);
  const twoArr = [];
  const oneArr = [];
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === 2) {
      twoArr.push(result[i][0]);
    } else if (result[i][1] === 1) {
      oneArr.push(result[i][0]);
    }
  }
  console.log(oneArr);
  console.log(twoArr);

  return <div className={classes.background}></div>;
};

export default ResultPage;
