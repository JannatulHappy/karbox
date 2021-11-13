import React from "react";
import "./Review.css";
import Rating from "react-rating";
const Review = (props) => {
  const { rating, des, img, name, profession } = props.review;
  return (
    <div className="col-12  review col-md-4 col-lg-4 border  text-white text-center px-5">
     
      <div className="gx-4">
        <img className="review-img img-fluid my-4" src={img} alt="" />
        <br />

        <Rating
          initialRating={rating} readonly
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        ></Rating>
        <p>
          <span className="">{des}</span>
        </p>
        <h5 className="review-name fw-bold mt-4 mb-2">{name}</h5>
        <p className="fs-6 fw-bold"> {profession}</p>
      </div>
    </div>
  );
};

export default Review;
