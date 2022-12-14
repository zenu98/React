import EditAlbumForm from "../../../components/albums/EditAlbumForm";
import { useRouter } from "next/router";

const EditAlbum = () => {
  const router = useRouter();

  const editAlbumHandler = async (albumData) => {
    const response = await fetch("/api/update-album", {
      method: "PATCH",
      body: JSON.stringify(albumData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return <EditAlbumForm onEditAlbum={editAlbumHandler} />;
};

export default EditAlbum;
