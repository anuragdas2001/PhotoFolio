import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Album } from "./components/Albums/Albums";
import { AlbumForm } from "./components/AlbumForm/AlbumForm";
function App() {
  const [albums, setAlbums] = useState([
    { albumName: "Anurag", albumImg: "zz" },
  ]);
  const [form, setForm] = useState({ name: "", img: "" });
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Inside handleCreate!");
    console.log(form);
    setAlbums([...albums, { albumName: form.name, albumImg: "" }]);
  };
  const handleClear = (e) => {
    e.preventDefault();
    console.log("Inside handleClear!");
    setForm({ name: "", img: "" });
  };
  return (
    <>
      <Navbar />
      <AlbumForm
        handleCreate={handleCreate}
        handleClear={handleClear}
        form={form}
        setForm={setForm}
      />
      <Album albums={albums} />
    </>
  );
}

export default App;
