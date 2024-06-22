import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css"

const Home = () => {
  return (
    <div className="d-flex flex-column">
    <section className="header-content site-header d-block">
      <Header/>
    </section>
    <section className="page-content content-inner d-block mt-5">
        <div className="container p-0">
          <div className=" p-1" style={{ height: "100vh" }}>
            Home
          </div>
        </div>
    </section>
    </div>
  );
};

export default Home;
