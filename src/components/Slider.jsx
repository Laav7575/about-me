import React, { useState } from "react";
//import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const Slider = ({ images }) => {
    const [index, setIndex] = useState(0);
    const slidestyles = {
        backgroundImage: `url(${images[index]})`,
        height: "500px",
        backgroundSize: "cover",
    }
    return (<div style={slidestyles}>
        <div
        style={{
          fontSize: "50px",
          position: "absolute",
          top: "50%",
          left: "80%",
          cursor: "pointer",
        }}
        onClick={() => {
          if (index < images.length - 1) {
            setIndex(index + 1)
          }
        }}
      >
        ⏩
      </div>
      <div
        style={{
          fontSize: "50px",
          position: "absolute",
          top: "50%",
          left: "20%",
          cursor: "pointer",
        }}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }
        }}
      >
        ⏪
      </div>
    </div>)
}

export default Slider