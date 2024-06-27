import React, { useState } from "react";
import "./Buttonfade.css";

const Buttonfade = ({ text, secondText, fontSize, W, H, Padding }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className="buttonfadefill border border-danger"
      style={{ maxWidth: W ? W : "140px", height: H ? H : "50px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: isHovered ? `translateY(-${H ? H : "50px"})` : "translateY(0)",
          transition: "transform 0.3s",
        }}
      >
        <span style={{ height: H ? H : "50px" }}>
          <p style={{ fontSize: `${fontSize ? fontSize : "1rem"}`, padding: `${Padding ? Padding : "0.75em"}`, textWrap:"nowrap"}}>{text}</p>
        </span>
      </div>
      <div
        style={{
          transform: isHovered ? `translateY(-${H ? H : "50px"})` : "translateY(0)",
          transition: "transform 0.3s",
        }}
      >
        <span style={{ height: H ? H : "50px" }}>
          <p style={{ fontSize: `${fontSize ? fontSize : "1rem"}`, padding: `${Padding ? Padding : "0.75em"}`, textWrap:"nowrap"}}>{secondText ? secondText : text}</p>
        </span>
      </div>
    </button>
  );
};

export default Buttonfade;
