import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./AlbumItem.module.css";

function AlbumItem(props) {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <h1>{props.date}</h1>
          </div>
          <div className={classes.actions}>
            <button onClick={showDetailHandler}>상세보기</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AlbumItem;
