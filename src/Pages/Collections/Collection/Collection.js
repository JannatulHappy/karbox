import React from "react";
import "./Collection.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const Collection = (props) => {
  const {
    id,
    name,
    img,
    price,
    rating,
    des,
    transmission,
    passenger,
    hp,
    topSpeed,
    kmHour,
  } = props.collection;
  return (
    <div className="col-lg-4 col-md-6 col-12 my-5">
      <div className="collection">
        <div className=" card  ">
          <img className="card-img-top" src={img} alt="" />

          <div className=" card-body">
            <p className="fw-bold  mt-3 ">{name}</p>
            <hr className="text-white" />
            <p className="des">
              <span>
                {des.split(" ").slice(0, 8).toString().replace(/,/g, " ")}
              </span>
            </p>
            <p className="price">{price}</p>
            <p className="rating-text fw-bold text-white fs-5">{rating}</p>
            <Rating
              className="rating"
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            ></Rating>
            <div className="d-flex">
              <div className="me-5 pe-2">
                <p className="thin">Transmission</p>
                <p className="thick ">{transmission}</p>
              </div>
              <div className="">
                <p className="thin">Passenger</p>
                <p className="thick">{passenger}</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-5 pe-3">
                <p className="thin">Top Speed</p>
                <p className="thick">{topSpeed}</p>
              </div>
              <div className="me-5 pe-5">
                <p className="thin">hp  </p>
               <p className="thick">{hp}</p>
              </div>
              <div className="">
                <p className="thin">0/1000 km/hour</p>
                <p className="thick">{kmHour}</p>
              </div>
            </div>
          </div>
          <Link to={`/collection/${id}`}>
            <button className="purchase-btn">Purchase Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
