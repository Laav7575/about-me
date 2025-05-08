import Slider from "../components/Slider";

export default function Projects() {
    const containerstyles = {
        height: "300px",
        width: "700px",
        marginTop: "15%",
        marginLeft: "23%",
        backgroundColor: "green"
    }
    const images = ["image1.JPG", "image2.JPG", "image3.JPG"];
    return (
    <>
      <h1>Projects</h1>
      <div className="container" style={containerstyles}>
        <Slider images={images} />
      </div>
    </>
  );
}
