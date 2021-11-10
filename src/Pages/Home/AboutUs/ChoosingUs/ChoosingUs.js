import React from "react";
import "./ChoosingUs.css";
const ChoosingUs = () => {
  return (
    <div className="choose-container">
      <div className="row pt-4 choose-top text-center ">
        <p className="fs-6 fw-bold mt-3 ">KARBOX</p>
        <h1 className="fw-bold text-white mt-4 pb-4">Why Choose Us</h1>
      </div>
      <div className="row choose py-4">
        <div className="col-lg-4 px-3 text-center col-md-4 col-12">
          <i className="fas fa-award"></i>
          <p className="fw-bold fs-6 ">Best Price</p>
          <p className="text">
            The publisher have released a book of the 500 best places to visit
            in the world - and it's given us a serious case of wanderlust
          </p>
        </div>
        <div className="col-lg-4 px-3 text-center col-md-4 col-12">
          <i className="fas fa-users"></i>
          <p className="fw-bold fs-6 ">24/7 Service</p>
          <p className="text">
            If you want to visit some of mid Adriatic islands, you have plenty
            of boats to choose from, including speedboats, big boats and
            sailboats
          </p>
        </div>
        <div className="col-lg-4 px-3 text-center col-md-4 col-12">
          <i className="fas fa-star"></i>
          <p className="fw-bold fs-6 ">Top Brand</p>
          <p className="text">
            The publisher have released a book of the 500 best places to visit
            in the world - and it's given us a serious case of wanderlust
          </p>
        </div>
      </div>
      <hr className="text-white mt-5 mb-3" />
    </div>
  );
};

export default ChoosingUs;
