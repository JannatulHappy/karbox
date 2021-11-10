import React from "react";
import "./UpHeader.css";

const UpHeader = () => {
  return (
    <div className="up-header ">
      <div className="row  py-2 up-header-item">
        <div className="col-md-8 col-lg-6 col-12 left-item">
          <span className="">
            <strong>Deals of The Week </strong> <strong className="text-secondary fw-bold">Halloween Sales</strong>
            <strong> Save up to 50% </strong>
          </span>
          <i className="ms-lg-1 fas fa-chevron-right"></i>
        </div>
        <div className="col-lg-2 col-md-0  col-12"></div>
        <div className="col-md-4 col-12 col-lg-4  right-item">
          <p >
            <strong >Deals End on 30th November 2021</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpHeader;
