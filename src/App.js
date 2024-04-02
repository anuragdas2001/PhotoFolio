import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Album } from "./components/Albums/Albums";
import { AlbumForm } from "./components/AlbumForm/AlbumForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Moment } from "./components/Moment/Moment";
function App() {
  const [albums, setAlbums] = useState([]);
  const [form, setForm] = useState({ name: "", img: "" });
  const [img, setImg] = useState([]);
  // const ind = 0;

  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Inside handleCreate!");
    console.log(form);
    // const index = albums.findIndex((album, ind) => {
    //   console.log(ind);
    //   console.log(album.id);
    //   return album.id == ind;
    // });
    // console.log(index);
    setAlbums([
      ...albums,
      { id: albums.id, albumName: form.name, albumImg: form.img },
    ]);
    // setMoment([...moment, { id: albums.id, img: albums.img }]);
    console.log(albums.img)
    setImg([...img,{pic:albums.img}])
    setForm({ name: "", img: "" });
    console.log(albums);
  };
  const handleClear = (e) => {
    e.preventDefault();
    console.log("Inside handleClear!");
    setForm({ name: "", img: "" });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: (
            <>
              <AlbumForm
                handleCreate={handleCreate}
                handleClear={handleClear}
                form={form}
                setForm={setForm}
              />
              {albums.length > 0 ? (
                <Album albums={albums} />
              ) : (
                <h1
                  className="mt-5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No albums available !
                </h1>
              )}
            </>
          ),
        },
        {
          path: "/moments",
          element: (
            <Moment albums={albums} img={img} setImg={setImg} />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
