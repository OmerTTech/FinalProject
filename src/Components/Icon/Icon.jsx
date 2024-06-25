import React from "react";

const Icon = ({main,classAdd,size}) => {
  return (
    <div className="icon">
      <i class={`${main?main:null} ${classAdd?classAdd:null} h1`} style={{fontSize:`${size?size:"50px"}`}}></i>
    </div>
  );
};

export default Icon;
