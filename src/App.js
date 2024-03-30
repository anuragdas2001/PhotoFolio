import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Album } from "./components/Albums/Albums";
import { AlbumForm } from "./components/AlbumForm/AlbumForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Moment } from "./components/Moment/Moment";
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
              <Album albums={albums} />,
            </>
          ),
        },
        {
          path:"/moments",
          element:<Moment/>
        }
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
