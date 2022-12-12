// our-domain.com/new-album
import { useRouter } from "next/router";
import NewAlbumForm from "../../components/albums/NewAlbumForm";

function NewAlbumPage() {
  const router = useRouter();

  const addAlbumHandler = async (albumData) => {
    const response = await fetch("/api/new-album", {
      method: "POST",
      body: JSON.stringify(albumData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return <NewAlbumForm onAddAlbum={addAlbumHandler} />;
}

export default NewAlbumPage;
