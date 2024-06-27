import React from "react";
import "./FeaFoodCard.css";
import Buttonfade from "../../ButtonFade/filled/Buttonfadefill";

const FeaFoodCard = () => {
  return (
    <div className="col-3 border border-danger rounded">
      <p
        className="position-relative d-flex justify-content-center bg-primary mb-0"
        style={{ height: "50%" }}
      >
        <img
          style={{ clipPath:"circle(50%)", width: "50%", objectFit: "contain" }}
          src="https://swigo.dexignzone.com/xhtml/assets/images/gallery/small/pic1.jpg"
          alt=""
        />
      </p>
      <h3 className="h3 text-center p-0 m-0">Pizza</h3>
      <p className="text-secondary text-center p-0 m-0">
        Mediterranean, Mixed, Margarita, Sausage.
      </p>
      <p className="h5 text-danger fw-bold text-center w-100 mb-3">
        ${`55.00`}
      </p>
      <p className="p-1 py-2 d-flex justify-content-center">
        <Buttonfade
          text={"Add to Card"}
          fontSize={"0.85rem"}
          W={"120px"}
          H="40px"
        />
      </p>
    </div>
  );
};

export default FeaFoodCard;
