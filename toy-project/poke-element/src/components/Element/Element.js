import { Fragment, useState } from "react";
import ElementList from "./ElementList";
import classes from "./Element.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTypeData, fetchTypeDatas } from "../../store/element-actions";
import { elementActions } from "../../store/element-slice";

const Element = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const type = useSelector((state) => state.element.items);
  console.log(type[0]);

  const dispatch = useDispatch();
  const fetchHandler = async () => {
    setIsLoading(true);
    console.log("첫번째 속성 dispatch!");

    await dispatch(fetchTypeData(type[0]));

    if (type.length === 2) {
      console.log("두번째 속성 dispatch!");
      dispatch(fetchTypeDatas(type[1]));
    }
    setIsLoading(false);
    props.onClick();
  };

  return (
    <>
      <ElementList onFetch={fetchHandler} isLoading={isLoading} />
    </>
  );
};

export default Element;
