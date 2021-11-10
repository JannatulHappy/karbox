import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/test.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="review-container pb-5">
      <div className="row text-center review-top">
        <p className="fs-6 fw-bold ">KARBOX</p>
        <h1 className="fw-bold text-white pb-4">What They Say</h1>
      </div>
      <div className="row container my-5 mx-auto">
        {reviews.map((review) => (
          <Review key={review.img} review={review}></Review>
        ))}
      </div>
      
    </div>
  );
};

export default Reviews;
