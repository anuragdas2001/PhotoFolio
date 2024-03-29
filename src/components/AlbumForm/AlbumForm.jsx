import styles from "../../styles/AlbumForm.module.css";
export const AlbumForm = () => {
  return (
    <>
      <div className={styles.FormContainer}>
        {" "}
        <form action="">
          <h2 style={{ fontWeight: "bold" }}>Create an album</h2>
          <input
            type="text"
            placeholder="Album Name"
            className={styles.form}
            style={{ borderRadius: "50px", textAlign: "center" }}
          />

          <button
            className="Clear"
            style={{
              height: "40px",
              width:"70px",
              margin: "0px 0px 0px 10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold" 
            }}
          >
            Clear
          </button>

          <button
            className="Create"
            style={{
                height: "40px",
                width:"70px",
              margin: "0px 0px 0px 10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold" 
            }}
          >
            {" "}
            Create
          </button>
        </form>
      </div>
    </>
  );
};
