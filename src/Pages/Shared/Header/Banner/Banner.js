import React from "react";
import "./Banner.css";
import bannerImg from "../../../../assets/banner-1.png"
const Banner = () => {
  return (
    <div>
      <div className="row banner-container mt-0 pt-0 g-0">
        <div className="col-12 col-md-6 col-lg-5 mt-lg-5 pt-lg-5">
          <div className="left-top text-white mt-lg-5">
            <p><span>MUSCLE CAR</span></p>
            <h1>MAUNG SPORT-GT</h1>
            <p className="mt-4">Sports Car GT is a racing game based on GT racing. It was published by Electronic Arts (EA) and developed by Image Space Incorporated for Microsoft Windows, and Point <br/> of View for PlayStation. Both editions of the game feature co-development <br/>by Westwood Studios.</p>
          </div>
          <div className="left-bottom ps-2 text-white mt-5">
              <p className="pt-1 mb-0"><span >Starting from</span></p>
              <p className="mt-0"><sup>$</sup>599.99</p>
              <button className="mt-3 mb-5  banner-btn">DISCOVER MORE <i className=" ms-3 fas fa-caret-right fs-5"></i></button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7 mt-0 pt-0">
            <img className=" mt-0 pt-0  img-fluid" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
