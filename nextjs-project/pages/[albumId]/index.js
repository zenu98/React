import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";

import AlbumDetail from "../../components/albums/AlbumDetail";

const DetailPage = (props) => {
  const router = useRouter();

  const removeAlbumHandler = async () => {
    const response = await fetch("/api/remove-album", {
      method: "DELETE",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return (
    <AlbumDetail
      image={props.albumsDetail.image}
      title={props.albumsDetail.title}
      address={props.albumsDetail.address}
      description={props.albumsDetail.description}
      id={props.albumsDetail.id}
      onClick={removeAlbumHandler}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://zenu98:tjwogml98s@cluster0.chknf5c.mongodb.net/albums?retryWrites=true&w=majority"
  );
  const db = client.db();

  const albumsCollection = db.collection("albums");

  const albums = await albumsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: albums.map((item) => ({
      params: { albumId: item._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data

  const albumId = context.params.albumId;
  const client = await MongoClient.connect(
    "mongodb+srv://zenu98:tjwogml98s@cluster0.chknf5c.mongodb.net/albums?retryWrites=true&w=majority"
  );
  const db = client.db();

  const albumsCollection = db.collection("albums");

  const selectedAlbum = await albumsCollection.findOne({
    _id: ObjectId(albumId),
  });

  client.close();

  return {
    props: {
      albumsDetail: {
        id: selectedAlbum._id.toString(),
        title: selectedAlbum.title,
        address: selectedAlbum.address,
        image: selectedAlbum.image,
        description: selectedAlbum.description,
      },
    },
  };
}

export default DetailPage;
