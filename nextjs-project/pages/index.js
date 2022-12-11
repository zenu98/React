import AlbumList from "../components/albums/AlbumList";
import { MongoClient } from "mongodb";
const DUMMY = [
  {
    id: "m1",
    title: "A First",
    image:
      "https://cafe24img.poxo.com/ybmbnc/web/product/tiny/202208/f81e349b702e7f9c3a811bdf170273b3.jpg",
    address: "abc",
    description: "mococo1",
  },
  {
    id: "m2",
    title: "A Second",
    image:
      "https://cafe24img.poxo.com/ybmbnc/web/product/tiny/202208/f81e349b702e7f9c3a811bdf170273b3.jpg",
    address: "abcd",
    description: "mococo2",
  },
];

function HomePage(props) {
  return <AlbumList albums={props.albums} />;
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
    revalidate: 1,
  };
}

export default HomePage;
