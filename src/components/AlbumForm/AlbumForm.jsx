import styles from "../../styles/AlbumForm.module.css";

export const AlbumForm = ({handleCreate,handleClear,form,setForm}) => {
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
            value={form.name}
            onChange={(e)=>setForm({name:e.target.value,img:""})}
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
            onClick={(e)=>handleClear(e)}
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
            onClick={(e)=>handleCreate(e)}
          >
            {" "}
            Create
          </button>
        </form>
      </div>
     

    </>
  );
};
