import classes from "./TypePage.module.css";
import Element from "../Element/Element";
const TypePage = (props) => {
  return (
    <div className={classes.background}>
      <Element onClick={props.onClick} />
    </div>
  );
};

export default TypePage;
