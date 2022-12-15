import classes from "./CardList.module.css";

function CardList(props) {
  return <div className={classes.cardlist}>{props.children}</div>;
}

export default CardList;
