import AlbumItem from "./AlbumItem";
import classes from "./AlbumList.module.css";

function AlbumList(props) {
  return (
    <ul className={classes.list}>
      {props.albums.map((item) => (
        <AlbumItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default AlbumList;
