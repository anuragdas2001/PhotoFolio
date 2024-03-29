export const AlbumItems = ({album}) => {
  return (
    <>
      <div className="card m-5" style={{ width: "18rem", height: "15rem" }}>
        <div className="card-body">
          <img
            src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png"
            style={{ width: "14rem", height: "10rem" }}
            className="card-img-top"
            alt="..."
          />
          <a
            href="#"
            className="btn btn-primary m-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {album.albumName}
          </a>
        </div>
      </div>
    </>
  );
};
