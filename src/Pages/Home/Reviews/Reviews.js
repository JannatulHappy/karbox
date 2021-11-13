import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://limitless-gorge-71694.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="reviews-container pb-5">
      <div className="row text-center review-top">
        <p className="fs-6 fw-bold ">TESTIMONI</p>
        <h1 className="fw-bold text-white pb-4">What They Say</h1>
      </div>
      <div className="row container my-5 mx-auto">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
