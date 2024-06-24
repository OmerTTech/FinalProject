import React from "react";
import "./Buttonfade.css"

const Buttonfade = ({text, secondText}) => {
  return (
    <button className="buttonfadeline border border-danger">
      <div>
        <span>
          <p>{text}</p>
        </span>
      </div>
      <div>
        <span>
          <p>{secondText ? secondText : text}</p>
        </span>
      </div>
    </button>
  );
};

export default Buttonfade;
