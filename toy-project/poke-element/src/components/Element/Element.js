import ElementList from "./ElementList";
import classes from "./Element.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTypeData } from "../../store/element-actions";
import { resultActions } from "../../store/result-slice";

const Element = () => {
  const type = useSelector((state) => state.element.items);
  console.log(type[0]);
  const result = useSelector((state) => state.result.types);
  console.log(result.bug);
  console.log(result);
  const dispatch = useDispatch();
  const fetchHandler = () => {
    dispatch(fetchTypeData(type[0]));
    if (type.length === 2) {
      dispatch(fetchTypeData(type[1]));
    }
  };

  return (
    <div>
      <ElementList />
      <div>
        <button onClick={fetchHandler}>제출</button>
        <div className={classes.container}>
          <div className={classes.box}></div>
          <div className={classes.box}></div>
        </div>
      </div>
    </div>
  );
};

export default Element;
