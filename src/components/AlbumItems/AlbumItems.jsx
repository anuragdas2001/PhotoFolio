export const AlbumItems = ({ album,key }) => {
  console.log(album.id)
  const index  = album.id
  return (
    <div className="card m-2 mt-5" style={{ width: "18rem", display: "inline-flex" }}>
      <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png"
          style={{ width: "14rem", height: "10rem" }}
          className="card-img-top"
          alt="Album Cover"
        />
        <a
          href="#"
          className="btn btn-primary mt-3"
          style={{ width: "100%", textAlign: "center" }}
        >
          {album.albumName}
        </a>
      </div>
    </div>
  );
};
