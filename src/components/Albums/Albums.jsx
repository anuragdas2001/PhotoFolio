import { Link } from "react-router-dom";
import { AlbumItems } from "../AlbumItems/AlbumItems";

export const Album = ({ albums }) => {
  // console.log(albums);
  return (
    <>
      {albums.map((album, index) => {
        return (
          <>
            <Link to="/moments">
              <AlbumItems key={index} album={album} />
            </Link>
          </>
        );
      })}
      
    </>
  );
};
