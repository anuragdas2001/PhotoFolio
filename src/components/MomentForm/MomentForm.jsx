import styles from "../../styles/AlbumForm.module.css";
import { useState } from "react";
export const MomentForm = ({ img, setImg }) => {
  const [momentform, setMomentForm] = useState();
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Inside handleCreate MomentForm!");
    const newImg = momentform;
    if (newImg) {
      setImg([...img, newImg]);
    }
    console.log(newImg);
    setMomentForm("");
  };
  const handleClear = (e) => {
    e.preventDefault();
    console.log("Inside handleClear MomentForm!");
    setImg("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Image Url"
        className={styles.form}
        style={{ borderRadius: "50px", textAlign: "center" }}
        onChange={(e) => setMomentForm(e.target.value)}
        required
        value={momentform}
      />
      <button
        className="Clear"
        style={{
          height: "40px",
          width: "70px",
          margin: "0px 0px 0px 10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
        onClick={(e) => handleClear(e)}
      >
        Clear
      </button>

      <button
        className="Create"
        style={{
          height: "40px",
          width: "70px",
          margin: "0px 0px 0px 10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
        onClick={(e) => handleCreate(e)}
      >
        Create
      </button>
    </>
  );
};
