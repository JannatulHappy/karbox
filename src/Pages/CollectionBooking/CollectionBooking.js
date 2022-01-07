import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Menubar from "../Shared/Header/Menubar/Menubar";
import "./CollectionBooking.css";
import Rating from "react-rating";
import useAuth from "../hooks/useAuth";
const CollectionBooking = () => {
  const { collectionId } = useParams();
  const [singleCollection, setSingleCollection] = useState({});
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //  add order 
  const onSubmit = (data) => {
    data.status = "pending";
    fetch(`https://limitless-gorge-71694.herokuapp.com/addBooking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Good job!", "Your Booking has been added!");
        } else {
          alert("Try again");
        }
      });

    reset();
  };
  // getting single collection 
  useEffect(() => {
    fetch(
      `https://limitless-gorge-71694.herokuapp.com/singleCollection/${collectionId}`
    )
      .then((res) => res.json())
      .then((data) => setSingleCollection(data));
  }, [collectionId]);
  const {
    name,
    img,
    rating,
    price,
    des,
    img2,
    img3,
    img4,
    img5,
    overall,
    salesManImg,
    salesManName,
    call,
    memberFrom,
  } = singleCollection;
  return (
    <div>
      <Menubar />
      <div className="booking-container">
        <div className="row top-part text-center ">
          <p className="fs-3 top-part-title   fw-bold pt-3 mt-5">{name}</p>
        </div>
        <div className="row booking  ">
          <div className="col-lg-8 col-md-12 mt-4 col-12 d-flex p-4 booking-left">
            <div className="row  left-container py-3 ">
              <div className="col-lg-6 col-md-6 col-12 p-2">
                <img src={img} className="img-fluid  mt-4 " alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-12 ">
                <h5 className="card-title  mb-3 fw-bold">{name}</h5>

                <p>
                  <span className="discount-price fw-bold"> {price}</span>
                </p>

                <div className="rating d-flex">
                  <Rating
                    initialRating={rating}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                  ></Rating>
                </div>

                <p className="card-text">{des}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 booking-right">
            <div className="order-box px-5 pb-3 mx-3 d-flex justify-content-center align-items-center">
              <div className="booking-form ">
                <p className="fs-5 mt-4 ps-md-5 ps-lg-5 pe-lg-4 fw-bold text-black">
                  Book Your Collection
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    className="p-2  text-white my-2"
                    value={user.displayName}
                    {...register("userName", { required: true })}
                  />
                  <br />
                  <input
                    type="email"
                    className="p-2 text-white my-2"
                    value={user.email}
                    {...register("userEmail", { required: true })}
                  />
                  <br />
                  <input
                    type="text"
                    className="p-2 text-white my-2"
                    value={name}
                    {...register("name", { required: true })}
                  />
                  <br />

                  <input
                    type="number"
                    className="p-2 my-2 text-secondary"
                    placeholder="Price"
                    {...register("price", { required: true })}
                  />
                  <br />
                  <input
                    type="number"
                    className="p-2 my-2 text-secondary"
                    placeholder="Number"
                    {...register("number", { required: true })}
                  />
                  <br />
                  <input
                    type="text"
                    className="p-2 text-white my-2"
                    value={new Date().toLocaleDateString()}
                    {...register("date", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 my-2 text-secondary"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 my-2 text-secondary"
                    placeholder="City "
                    {...register("city", { required: true })}
                  />
                  <br />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    className="  px-3 mt-3 submit-btn bg-black  fs-6   btn "
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row bottom-part my-5 booking ">
          <div className="col-lg-9 col-md-12 col-12 d-flex middle-part">
            <div className="m-2 img">
              <img className="img-fluid" src={img2} alt="" />
            </div>
            <div className="m-2 img">
              <img className="img-fluid" src={img3} alt="" />
            </div>
            <div className="m-2 img">
              <img className="img-fluid" src={img4} alt="" />
            </div>
            <div className="m-2 img">
              <img className="img-fluid" src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="row container booking-left mx-auto">
          <div className="col-12 py-5">
            <p className="fs-3  card-title fw-bold">Overall</p>
            <p className="text-white mt-4 ">{overall} Happy Journey!!</p>
          </div>
        </div>
        <div className="contact-container my-5">
          <div className="row  container mx-auto ">
            <div
              className="col-12 py-4  rounded contact
            "
            >
              <div className="row ">
                <div className="d-flex">
                  <div>
                    <img src={salesManImg} alt="" />
                  </div>
                  <div>
                    <div>
                      <p className="fs-3 text-black fw-bold">{salesManName}</p>
                      <p className="text-secondary fw-bold">{memberFrom}</p>
                    </div>

                    <div className="row ">
                      <div className="d-flex">
                        <div>
                          <i className="fas fa-phone-volume fs-1 fw-bold text-black me-2b"></i>
                        </div>
                        <div className="text-black fw-bold">
                          <p>{call}</p>
                          <p>Contact Dealer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBooking;
