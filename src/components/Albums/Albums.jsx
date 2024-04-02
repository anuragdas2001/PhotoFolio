import { Link } from "react-router-dom";
import { AlbumItems } from "../AlbumItems/AlbumItems";

export const Album = ({ albums }) => {
  console.log(albums);
  return (
    <>
      {albums.map((album, index) => {
        console.log(index);
        album.id=index
        return (
          <Link to="/moments" key={index}>
            <AlbumItems album={album} key={index} />
          </Link>
        );
      })}
    </>
  );
};
