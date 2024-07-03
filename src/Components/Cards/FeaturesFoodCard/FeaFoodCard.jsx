import React from "react";
import "./FeaFoodCard.css";
import Buttonfade from "../../ButtonFade/filled/Buttonfadefill";

const FeaFoodCard = () => {
  return (
    <div
      class="card col-3 card-border rounded"
      style={{ width: "18rem" }}
    >
      <div className="bg-danger p-0 py-2 mt-2 d-flex justify-content-center">
      <div className="w-50 h-100 p-2 bg-white rounded-circle">
        <img
          class="card-img-top rounded-circle"
          src="https://swigo.dexignzone.com/xhtml/assets/images/gallery/small/pic1.jpg"
          alt="Card image cap"
        />
      </div>
      </div>
      <div class="card-body">
        <h5 class="card-title h3 text-center">Pizza</h5>
        <p class="card-text text-secondary text-center mb-1" style={{filter: "drop-shadow(0px 0px 0.00001px #555)"}}>
          Mediterranean, Mixed, Margarita, Sausage.
        </p>
        <h4 className="h4 text-danger fw-bold text-center w-100 mb-3">
          ${`55.00`}
        </h4>
        <p className="p-1 py-2 mb-0 d-flex justify-content-center">
          <Buttonfade
            text={"Add to Card"}
            fontSize={"0.85rem"}
            W={"120px"}
            H="40px"
          />
        </p>
      </div>
    </div>
  );
};

export default FeaFoodCard;
