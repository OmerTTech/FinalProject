import React from "react";
import { IoPizzaOutline } from "react-icons/io5";
import "../Iconwbg.css"
const IconReact = ({main,classAdd,size}) => {
  return (
    <div className="iconbg">
      <IoPizzaOutline className={`${main?main:null} ${classAdd?classAdd:null} h1`} style={{fontSize:`${size?size:"50px"}`}}/>
    </div>
  );
};

export default IconReact;
