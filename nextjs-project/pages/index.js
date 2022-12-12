import AlbumList from "../components/albums/AlbumList";
import NoData from "../components/albums/NoData";
import { MongoClient } from "mongodb";

function HomePage(props) {
  const data = props.albums;
  if (data.length !== 0) {
    return <AlbumList albums={data} />;
  } else {
    return <NoData />;
  }
}

// export async function getServerSideProps(context) {
//   const request = context.request;
//   const response = context.response;

//   // fetch data from an API

//   return {
//     props: {
//       albums: DUMMY,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from api

  const client = await MongoClient.connect(
    "mongodb+srv://zenu98:tjwogml98s@cluster0.chknf5c.mongodb.net/albums?retryWrites=true&w=majority"
  );
  const db = client.db();

  const albumsCollection = db.collection("albums");

  const albums = await albumsCollection.find().toArray();

  client.close();

  return {
    props: {
      albums: albums.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        id: item._id.toString(),
      })),
    },
    revalidate: 1000,
  };
}

export default HomePage;
