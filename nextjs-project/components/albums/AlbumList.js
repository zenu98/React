import AlbumItem from "./AlbumItem";
import classes from "./AlbumList.module.css";

function AlbumList(props) {
  return (
    <div className={classes.row}>
      <div className={classes.list}>
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
      </div>
    </div>
  );
}

export default AlbumList;
