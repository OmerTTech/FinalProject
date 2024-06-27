import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css"
import { UserContext } from "../../Contexts/userContext";
import FeaFoodCard from "../../Components/Cards/FeaturesFoodCard/FeaFoodCard";


const Home = () => {
  const {isSmallScreen} = useContext(UserContext)
  return (
    <div className="d-flex flex-column">
    <section className="header-content site-header d-block">
      <Header/>
    </section>
    <section className="page-content content-inner d-block mt-5">
        <div className="container p-0">
          <div className=" p-1" style={{ height: "100vh" }}>
            <h1 className="header-font text-center" style={{ fontSize: `${isSmallScreen ? "3rem" : "3.75rem"}`}}>Our Featured Food</h1>
            <div className="row">
              <FeaFoodCard />
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};

export default Home;
