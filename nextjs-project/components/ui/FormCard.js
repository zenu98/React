import classes from "./FormCard.module.css";

function FormCard(props) {
  return <div className={classes.formcard}>{props.children}</div>;
}

export default FormCard;
