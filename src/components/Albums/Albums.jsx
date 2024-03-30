import { AlbumItems } from "../AlbumItems/AlbumItems";
export const Album = ({albums}) => {
  // console.log(albums);
  return (
    <>
      {albums.map((album,index)=>{
        return(<>
          <AlbumItems key={index} album={album} />
        
        </>)
      })}
    </>
  );
};
