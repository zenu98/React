import classes from "./ResultPage.module.css";
import { useSelector } from "react-redux";
const ResultPage = () => {
  const result = useSelector((state) => state.result.typesArr);

  const twoArr = [];
  const typesHandler = () => {
    for (let key in result[0]) {
      twoArr.push(key);
    }
  };

  return <div className={classes.background}></div>;
};

export default ResultPage;
