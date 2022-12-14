import classes from "./AlbumDetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const AlbumDetail = (props) => {
  const router = useRouter();

  const editPageHandler = () => {
    router.push(`/${props.id}/edit-album`);
  };
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <button onClick={props.onClick}>삭제</button>
      <button onClick={editPageHandler}>수정</button>
    </section>
  );
};

export default AlbumDetail;
