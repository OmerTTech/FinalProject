import React from "react";
import "./Iconwbg.css"

const Iconwbg = ({main,classAdd,size}) => {
  return (
    <div className="iconbg">
      <i class={`${main?main:null} ${classAdd?classAdd:null} h1`} style={{fontSize:`${size?size:"50px"}`}}></i>
    </div>
  );
};

export default Iconwbg;
