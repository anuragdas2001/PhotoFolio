import { MomentForm } from "../MomentForm/MomentForm";
import { MomentItems } from "../MomentItems/MomentItems";
export const Moment = ({ albums, img, setImg }) => {
  console.log("Moment !");
  // const id = albums.id;
  // console.log(id)
  console.log(img);
  return (
    <>
      <div className="mt-5">
        <MomentForm img={img} setImg={setImg} />
      </div>
      <br />
      <br />
      <br />
      
      {img.map((i, ind) => (
        <div
          className="ms-5 me-5"
          style={{ display: "inline-flex", flexDirection: "column" }}
        >
          <MomentItems i={i} ind={ind} />
        </div>
      ))}
    </>
  );
};
