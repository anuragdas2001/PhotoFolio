import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Album } from "./components/Albums/Albums";
import { AlbumForm } from "./components/AlbumForm/AlbumForm";
function App() {
  const [albums, setAlbums] = useState([{albumName:"Anurag",albumImg:"zz"}]);
  const [form,setForm] = useState();
  return (
    <>
      <Navbar />
      <AlbumForm/>
      <Album albums={albums}/>
    </>
  );
}

export default App;
